# -*- coding: utf-8 -*-
"""Extract clean Grégoire props from old data.js (pre-rebuild)."""
import re, json, sys, subprocess

sys.stdout.reconfigure(encoding='utf-8')

# Get old data.js from git
result = subprocess.run(
    ['git', 'show', 'dcd25ef:data.js'],
    capture_output=True, cwd='C:/Users/Moi/projets/UnJourUneApp/quiz-municipales'
)
old_js = result.stdout.decode('utf-8')

# Extract PROPOSITIONS section
m = re.search(r'const PROPOSITIONS = \[(.*?)\];', old_js, re.DOTALL)
props_section = m.group(1)

# Parse all gregoire props
gregoire_props = []
pattern = r'\{\s*id:\s*\d+,\s*theme:\s*"([^"]*)",\s*text:\s*"((?:[^"\\]|\\.)*)",\s*candidateId:\s*"gregoire"\s*\}'
for match in re.finditer(pattern, props_section):
    theme = match.group(1)
    text = match.group(2)
    # Unescape JS strings
    text = text.replace('\\"', '"').replace('\\\\', '\\')
    gregoire_props.append({'theme': theme, 'text': text, 'candidateId': 'gregoire'})

# Check t-ratio and classify
clean = []
garbled = []
for p in gregoire_props:
    alpha = sum(1 for c in p['text'] if c.isalpha())
    t_count = sum(1 for c in p['text'] if c.lower() == 't')
    ratio = t_count / alpha if alpha > 0 else 1
    if ratio >= 0.02:
        clean.append(p)
    else:
        garbled.append(p)

# Dedup clean props
seen = set()
deduped = []
for p in clean:
    key = p['text'].strip()
    if key in seen:
        continue
    seen.add(key)
    deduped.append(p)

print(f'Old data.js Grégoire props: {len(gregoire_props)} total')
print(f'  Clean: {len(clean)}, after dedup: {len(deduped)}')
print(f'  Garbled (low t-ratio): {len(garbled)}')

# Show themes breakdown
themes = {}
for p in deduped:
    themes[p['theme']] = themes.get(p['theme'], 0) + 1
print(f'\nThemes ({len(themes)}):')
for t in sorted(themes.keys()):
    print(f'  {t}: {themes[t]}')

# Save clean deduped props
with open('old_gregoire_props.json', 'w', encoding='utf-8') as f:
    json.dump(deduped, f, ensure_ascii=False, indent=2)
print(f'\nSaved {len(deduped)} props to old_gregoire_props.json')
