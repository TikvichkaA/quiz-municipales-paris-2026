# -*- coding: utf-8 -*-
"""Rebuild data.js from Excel source + non-Excel candidates."""
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# ========= 1. Load Excel props =========
with open('excel_dump.json', 'r', encoding='utf-8') as f:
    excel_props = json.load(f)

# ========= 2. Garbled detection (Grégoire props with missing 't') =========
# The corruption systematically removes 't'/'T' characters from text.
# Normal French has ~7% 't'. Garbled text has 0-1% (only surviving proper nouns).
def is_garbled(text, candidate_id='gregoire'):
    if candidate_id != 'gregoire':
        return False
    alpha_chars = sum(1 for c in text if c.isalpha())
    if alpha_chars < 20:
        return False
    t_count = sum(1 for c in text if c.lower() == 't')
    ratio = t_count / alpha_chars
    return ratio < 0.02  # threshold: <2% means garbled

# ========= 3. Clean + dedup Excel =========
seen = set()
clean_excel = []
for p in excel_props:
    if is_garbled(p['text'], p['candidateId']):
        continue
    key = p['text'].strip()
    if key in seen:
        continue
    seen.add(key)
    clean_excel.append(p)

# ========= 4. Load non-Excel candidate props =========
with open('non_excel_props.json', 'r', encoding='utf-8') as f:
    non_excel = json.load(f)

# Remap themes for non-Excel candidates to match Excel theme names
THEME_MAP = {
    'Éducation': 'Education',
    'Petite enfance': "Petite enfance / protection de l'enfance",
    'Propreté et déchets': 'Propreté et gestion des déchets',
    'Espaces verts & biodiversité': 'Espaces verts, végétalisation & biodiversité',
    'Solidarité & accessibilité': 'Solidarité, inclusion & accessibilité',
    'Patrimoine & beauté': 'Patrimoine & Beauté de la ville',
    'Économie & commerces': 'Economie locale & commerces',
    'Vie associative & quartiers': 'Associations et vie de quartier',
}

for p in non_excel:
    p['theme'] = THEME_MAP.get(p['theme'], p['theme'])

# ========= 5. Build all propositions =========
all_props = clean_excel + non_excel

# ========= 6. Build themes list =========
all_themes = sorted(set(p['theme'] for p in all_props))

# ========= 7. Read original data.js to preserve DUELS =========
with open('data.js', 'r', encoding='utf-8') as f:
    original = f.read()

duels_match = re.search(r'(const DUELS = \[.*?\];)', original, re.DOTALL)
duels_section = duels_match.group(1) if duels_match else ''

# ========= 8. Generate new data.js =========
def escape_js(text):
    # Remove surrounding quotes if present
    text = text.strip()
    if text.startswith('"') and text.endswith('"'):
        text = text[1:-1]
    if text.startswith('\u201c') and text.endswith('\u201d'):
        text = text[1:-1]
    # Escape for JS double-quoted string
    text = text.replace('\\', '\\\\')
    text = text.replace('"', '\\"')
    text = text.replace('\n', ' ')
    text = text.replace('\r', ' ')
    # Clean up multiple spaces
    text = ' '.join(text.split())
    return text

lines = []
lines.append('// Données du quiz municipales Paris 2026')
lines.append('// Extraites du fichier Excel VP_municipales 2026')
lines.append('')

# CANDIDATES
lines.append('const CANDIDATES = [')
lines.append('  { id: "dati", name: "Rachida Dati", color: "#8B5CF6", party: "LR / Renaissance" },')
lines.append('  { id: "gregoire", name: "Emmanuel Grégoire", color: "#EF4444", party: "PS / NFP" },')
lines.append('  { id: "chikirou", name: "Sophia Chikirou", color: "#F97316", party: "LFI / NFP" },')
lines.append('  { id: "bournazel", name: "Pierre-Yves Bournazel", color: "#3B82F6", party: "Horizons / Renaissance" },')
lines.append('  { id: "knafo", name: "Sarah Knafo", color: "#1E3A5F", party: "Reconquête" },')
lines.append('  { id: "mariani", name: "Thierry Mariani", color: "#0D2B45", party: "RN / UDR" },')
lines.append('  { id: "npa", name: "Blandine Chauvel", color: "#DC2626", party: "NPA-Révolutionnaires" }')
lines.append('];')
lines.append('')

# THEMES
lines.append('const THEMES = [')
for t in all_themes:
    lines.append(f'  "{escape_js(t)}",')
lines.append('];')
lines.append('')

# PROPOSITIONS grouped by theme
lines.append('const PROPOSITIONS = [')
prop_id = 1
for theme in all_themes:
    theme_props = [p for p in all_props if p['theme'] == theme]
    if not theme_props:
        continue
    lines.append(f'  // === {theme.upper()} ===')
    for p in theme_props:
        text = escape_js(p['text'])
        theme_escaped = escape_js(p['theme'])
        lines.append(f'  {{ id: {prop_id}, theme: "{theme_escaped}", text: "{text}", candidateId: "{p["candidateId"]}" }},')
        prop_id += 1
    lines.append('')

lines.append('];')
lines.append('')

# DUELS
lines.append(duels_section)
lines.append('')

output = '\n'.join(lines)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(output)

print(f'Generated data.js with {prop_id - 1} propositions across {len(all_themes)} themes')
print(f'  Excel candidates (clean, deduped): {len(clean_excel)}')
print(f'  Other candidates (knafo/mariani/npa): {len(non_excel)}')
garbled_count = sum(1 for p in excel_props if is_garbled(p['text'], p['candidateId']))
print(f'  Garbled Excel props excluded: {garbled_count}')
