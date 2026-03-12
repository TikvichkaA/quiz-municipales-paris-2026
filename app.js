// ====== STATE ======
let quizState = {
  comparisonCandidates: []
};

// ====== SCREEN NAVIGATION ======
let previousScreen = 'accueil';

function showScreen(screenId) {
  const current = document.querySelector('.screen.active');
  if (current && screenId === 'comparaison') {
    previousScreen = current.id.replace('screen-', '');
  }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('screen-' + screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
  if (screenId === 'comparaison') {
    initComparison();
  }
  if (screenId === 'questionnaire-detail') {
    renderQuestionnaireDetail();
  }
}

function goBackFromComparison() {
  showScreen(previousScreen);
}

// ====== UTILS ======
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ====== TOGGLE DURATION BUTTONS ======
function toggleDurationButtons() {
  const el = document.getElementById('duration-buttons');
  el.style.display = el.style.display === 'none' ? '' : 'none';
}

// ====== RESULTS COMPUTATION ======
function computeResults(scores, counts) {
  const results = CANDIDATES.map(c => {
    const score = scores[c.id];
    const count = counts[c.id];
    let affinity = 0;
    if (count > 0) {
      affinity = (score / count) * 100;
    }
    affinity = Math.round(Math.max(0, Math.min(100, affinity)));
    return { ...c, affinity };
  });
  results.sort((a, b) => b.affinity - a.affinity);
  return results;
}

function renderResultsBars(containerId, results) {
  const barsContainer = document.getElementById(containerId);
  barsContainer.innerHTML = '';

  results.forEach(r => {
    const item = document.createElement('div');
    item.className = 'result-bar-item';
    item.innerHTML = `
      <div class="result-bar-header">
        <span class="result-bar-name">${r.name}</span>
        <span class="result-bar-pct" style="color:${r.color}">${r.affinity}%</span>
      </div>
      <div class="result-bar-track">
        <div class="result-bar-fill" style="background:${r.color}" data-width="${r.affinity}"></div>
      </div>
    `;
    barsContainer.appendChild(item);
  });
}

function animateResultsBars(containerId) {
  requestAnimationFrame(() => {
    const bars = document.querySelectorAll('#' + containerId + ' .result-bar-fill');
    bars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.width = bar.dataset.width + '%';
      }, 150 + i * 120);
    });
  });
}

// ====== SHARE ======
function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.cssText = 'position:fixed;opacity:0;left:-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('Copié dans le presse-papier !');
  } catch {
    showToast('Impossible de copier');
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ====== COMPARISON ======
function initComparison() {
  const select = document.getElementById('theme-select');
  if (select.options.length <= 1) {
    select.innerHTML = '';
    THEMES.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      select.appendChild(opt);
    });
  }

  const togglesContainer = document.getElementById('candidate-toggles');
  if (togglesContainer.children.length === 0) {
    CANDIDATES.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'candidate-toggle';
      btn.dataset.candidateId = c.id;
      btn.textContent = c.name;
      btn.onclick = () => toggleCandidate(c.id);
      togglesContainer.appendChild(btn);
    });
    quizState.comparisonCandidates = [CANDIDATES[0].id, CANDIDATES[1].id];
  }

  updateToggleStyles();
  updateComparison();
}

function toggleCandidate(candidateId) {
  const idx = quizState.comparisonCandidates.indexOf(candidateId);
  if (idx >= 0) {
    if (quizState.comparisonCandidates.length > 1) {
      quizState.comparisonCandidates.splice(idx, 1);
    }
  } else {
    if (quizState.comparisonCandidates.length >= 2) {
      quizState.comparisonCandidates.shift();
    }
    quizState.comparisonCandidates.push(candidateId);
  }
  updateToggleStyles();
  updateComparison();
}

function updateToggleStyles() {
  document.querySelectorAll('.candidate-toggle').forEach(btn => {
    btn.classList.toggle('selected', quizState.comparisonCandidates.includes(btn.dataset.candidateId));
  });
}

function updateComparison() {
  const theme = document.getElementById('theme-select').value;
  const grid = document.getElementById('comparaison-grid');
  grid.innerHTML = '';

  quizState.comparisonCandidates.forEach(cid => {
    const candidate = CANDIDATES.find(c => c.id === cid);
    const props = PROPOSITIONS.filter(p => p.theme === theme && p.candidateId === cid);

    const col = document.createElement('div');
    col.className = 'comparaison-column';

    const nameEl = document.createElement('div');
    nameEl.className = 'comparaison-column-name';
    nameEl.textContent = candidate.name;
    nameEl.style.borderBottomColor = candidate.color;
    col.appendChild(nameEl);

    if (props.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'comparaison-empty';
      empty.textContent = 'Aucune proposition sur ce thème';
      col.appendChild(empty);
    } else {
      props.forEach(p => {
        const propEl = document.createElement('div');
        propEl.className = 'comparaison-proposition';
        propEl.textContent = p.text;
        col.appendChild(propEl);
      });
    }

    grid.appendChild(col);
  });
}

// ====== CONFETTI ======
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#E91E63', '#FF4081', '#F48FB1', '#AD1457', '#C2185B', '#FF80AB', '#F06292'];
  const particles = [];
  const count = 80;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 12,
      vy: -(Math.random() * 12 + 4),
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.18 + Math.random() * 0.08,
      opacity: 1,
      delay: Math.random() * 300
    });
  }

  const startTime = Date.now();

  function animate() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      if (elapsed < p.delay) { alive = true; return; }
      const t = elapsed - p.delay;

      p.x += p.vx;
      p.vy += p.gravity;
      p.y += p.vy;
      p.vx *= 0.99;
      p.rotation += p.rotSpeed;

      if (t > 1800) p.opacity = Math.max(0, 1 - (t - 1800) / 600);
      if (p.opacity <= 0 || p.y > canvas.height + 20) return;

      alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (alive) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// ====== MATCH SCREEN ======
function showMatchScreen(results) {
  const winner = results[0];

  document.getElementById('match-pct').textContent = winner.affinity + '%';
  document.getElementById('match-candidate-name').textContent = winner.name;
  document.getElementById('match-candidate-party').textContent = winner.party;
  document.getElementById('match-candidate-score').textContent = winner.affinity + '%';

  const scoreEl = document.getElementById('match-candidate-score');
  scoreEl.style.background = `linear-gradient(135deg, ${winner.color}, #e91e63)`;
  scoreEl.style.webkitBackgroundClip = 'text';
  scoreEl.style.webkitTextFillColor = 'transparent';
  scoreEl.style.backgroundClip = 'text';

  showScreen('match');

  setTimeout(() => launchConfetti(), 400);
  if (navigator.vibrate) navigator.vibrate([10, 50, 10]);
}

function showMatchResultsScreen() {
  displayQuestionnaireResults();
}

function shareMatchResults() {
  shareQuestionnaireResults();
}

// ====== QUESTIONNAIRE STATE ======
let questionnaireState = {
  questions: [],
  currentIndex: 0,
  scores: {},
  counts: {},
  answers: [], // { question, chosenIndex } (-1 = skip)
  results: null,
  isAnimating: false
};

// ====== GENERATE QUESTIONS (with merged identical choices) ======
function generateQuestions() {
  const questions = QUESTIONNAIRE_DATA.map(q => {
    const shuffled = shuffleArray([...q.choices]);

    // Merge choices with identical text
    const mergedChoices = [];
    const textMap = {};
    shuffled.forEach(ch => {
      if (textMap[ch.text]) {
        textMap[ch.text].candidateIds.push(ch.candidateId);
        if (ch.detail && !textMap[ch.text].detail) textMap[ch.text].detail = ch.detail;
      } else {
        const merged = { text: ch.text, candidateIds: [ch.candidateId], detail: ch.detail || null };
        textMap[ch.text] = merged;
        mergedChoices.push(merged);
      }
    });

    return {
      question: q.question,
      theme: q.theme,
      context: q.context,
      choices: mergedChoices
    };
  });
  shuffleArray(questions);
  return questions;
}

// ====== START QUESTIONNAIRE ======
function startQuestionnaire(count) {
  let questions = generateQuestions();
  if (count && count < questions.length) {
    questions = questions.slice(0, count);
  }
  questionnaireState.questions = questions;
  questionnaireState.currentIndex = 0;
  questionnaireState.scores = {};
  questionnaireState.counts = {};
  questionnaireState.answers = [];
  questionnaireState.isAnimating = false;

  CANDIDATES.forEach(c => {
    questionnaireState.scores[c.id] = 0;
    questionnaireState.counts[c.id] = 0;
  });

  // Count appearances per candidate across all questions (with merged choices)
  questionnaireState.questions.forEach(q => {
    q.choices.forEach(ch => {
      ch.candidateIds.forEach(cid => {
        questionnaireState.counts[cid]++;
      });
    });
  });

  showScreen('questionnaire');
  renderQuestion();
}

// ====== RENDER QUESTION ======
function renderQuestion() {
  const { currentIndex, questions } = questionnaireState;
  const total = questions.length;

  const pct = (currentIndex / total) * 100;
  document.getElementById('questionnaire-progress-fill').style.width = pct + '%';
  document.getElementById('questionnaire-progress-text').textContent = (currentIndex + 1) + ' / ' + total;

  if (currentIndex >= total) {
    showQuestionnaireResults();
    return;
  }

  const q = questions[currentIndex];
  document.getElementById('questionnaire-theme').textContent = q.theme;
  document.getElementById('questionnaire-question-text').textContent = q.question;

  const contextEl = document.getElementById('questionnaire-context');
  if (q.context) {
    contextEl.textContent = q.context;
    contextEl.style.display = '';
  } else {
    contextEl.textContent = '';
    contextEl.style.display = 'none';
  }

  const container = document.getElementById('questionnaire-choices');
  container.innerHTML = '';

  q.choices.forEach((ch, i) => {
    const btn = document.createElement('button');
    btn.className = 'questionnaire-choice';
    btn.innerHTML = `<span class="questionnaire-choice-text">${ch.text}</span>`;
    btn.onclick = () => answerQuestion(i);
    container.appendChild(btn);
  });

  // Restore skip button (in case it was replaced by "Suivant")
  const bottomDiv = document.querySelector('.questionnaire-bottom');
  bottomDiv.innerHTML = `<button class="questionnaire-skip" onclick="answerQuestion(-1)">Aucune ne me convient</button>`;

  questionnaireState.isAnimating = false;
}

// ====== ANSWER QUESTION ======
function answerQuestion(choiceIndex) {
  if (questionnaireState.isAnimating) return;
  questionnaireState.isAnimating = true;

  const q = questionnaireState.questions[questionnaireState.currentIndex];

  // Record answer
  questionnaireState.answers.push({ question: q, chosenIndex: choiceIndex });

  // Scoring: attribute +1 to ALL candidates in the merged group
  if (choiceIndex >= 0) {
    const chosen = q.choices[choiceIndex];
    chosen.candidateIds.forEach(cid => {
      questionnaireState.scores[cid] += 1;
    });
  }

  // Visual feedback + reveal candidate names on all choices
  const choiceBtns = document.querySelectorAll('.questionnaire-choice');
  choiceBtns.forEach((btn, i) => {
    const ch = q.choices[i];
    // Build candidate label
    const names = ch.candidateIds.map(cid => {
      const c = CANDIDATES.find(candidate => candidate.id === cid);
      return `<span class="detail-candidate-dot" style="background:${c.color}"></span> ${c.name}`;
    }).join('<span class="candidate-sep"> · </span>');
    const label = document.createElement('div');
    label.className = 'questionnaire-choice-reveal';
    label.innerHTML = names;
    btn.appendChild(label);

    // Detail expand button if detail exists
    if (ch.detail) {
      const detailBtn = document.createElement('button');
      detailBtn.className = 'questionnaire-detail-toggle';
      detailBtn.textContent = 'Voir le détail';
      detailBtn.onclick = (e) => {
        e.stopPropagation();
        const detailDiv = btn.querySelector('.questionnaire-choice-detail');
        if (detailDiv.style.display === 'none') {
          detailDiv.style.display = '';
          detailBtn.textContent = 'Masquer le détail';
        } else {
          detailDiv.style.display = 'none';
          detailBtn.textContent = 'Voir le détail';
        }
      };
      btn.appendChild(detailBtn);

      const detailDiv = document.createElement('div');
      detailDiv.className = 'questionnaire-choice-detail';
      detailDiv.style.display = 'none';
      detailDiv.textContent = ch.detail;
      btn.appendChild(detailDiv);
    }

    if (choiceIndex >= 0) {
      if (i === choiceIndex) {
        btn.classList.add('chosen');
      } else {
        btn.classList.add('not-chosen');
      }
    } else {
      btn.classList.add('not-chosen');
    }
  });

  // Haptic
  if (navigator.vibrate) navigator.vibrate(8);

  // Hide skip button, show "Suivant" button
  const bottomDiv = document.querySelector('.questionnaire-bottom');
  bottomDiv.innerHTML = `<button class="btn-suivant" onclick="nextQuestion()">Suivant →</button>`;
}

function nextQuestion() {
  questionnaireState.currentIndex++;
  renderQuestion();
}

// ====== GO BACK QUESTION ======
function goBackQuestion() {
  if (questionnaireState.isAnimating) return;
  if (questionnaireState.currentIndex > 0) {
    const lastAnswer = questionnaireState.answers.pop();
    if (lastAnswer && lastAnswer.chosenIndex >= 0) {
      const chosen = lastAnswer.question.choices[lastAnswer.chosenIndex];
      chosen.candidateIds.forEach(cid => {
        questionnaireState.scores[cid] -= 1;
      });
    }
    questionnaireState.currentIndex--;
    renderQuestion();
  } else {
    showScreen('accueil');
  }
}

// ====== QUESTIONNAIRE RESULTS ======
function showQuestionnaireResults() {
  const results = computeResults(questionnaireState.scores, questionnaireState.counts);
  questionnaireState.results = results;
  displayQuestionnaireResults();
  setTimeout(() => launchConfetti(), 400);
}

function displayQuestionnaireResults() {
  const results = questionnaireState.results;
  const winner = results[0];
  document.getElementById('questionnaire-winner-name').textContent = winner.name;
  document.getElementById('questionnaire-winner-score').textContent = winner.affinity + '%';
  document.getElementById('questionnaire-winner-party').textContent = winner.party;
  const scoreEl = document.getElementById('questionnaire-winner-score');
  scoreEl.style.background = `linear-gradient(135deg, ${winner.color}, var(--rose))`;
  scoreEl.style.webkitBackgroundClip = 'text';
  scoreEl.style.webkitTextFillColor = 'transparent';
  scoreEl.style.backgroundClip = 'text';

  renderResultsBars('questionnaire-resultats-bars', results);
  showScreen('questionnaire-resultats');
  animateResultsBars('questionnaire-resultats-bars');
}

// ====== QUESTIONNAIRE DETAIL (with merged choices support) ======
function renderQuestionnaireDetail() {
  const list = document.getElementById('questionnaire-detail-list');
  list.innerHTML = '';

  questionnaireState.answers.forEach((a, i) => {
    const q = a.question;
    const chosenIndex = a.chosenIndex;

    const item = document.createElement('div');
    item.className = 'questionnaire-detail-item';
    item.style.animationDelay = `${i * 40}ms`;

    let html = `<div class="questionnaire-detail-theme">${q.theme}</div>`;
    if (q.question) {
      html += `<div class="questionnaire-detail-question">${q.question}</div>`;
    }

    if (chosenIndex < 0) {
      html += '<div class="questionnaire-detail-skip-label">Aucune proposition choisie</div>';
    }

    html += '<div class="questionnaire-detail-choices">';
    q.choices.forEach((ch, ci) => {
      const isChosen = ci === chosenIndex;
      const cls = isChosen ? 'questionnaire-detail-chosen' : (chosenIndex >= 0 ? 'questionnaire-detail-skipped' : '');

      // Build candidate names list for merged choices
      const candidateNames = ch.candidateIds.map(cid => {
        const c = CANDIDATES.find(candidate => candidate.id === cid);
        return `<span class="detail-candidate-dot" style="background:${c.color}"></span> ${c.name}`;
      }).join('<span class="candidate-sep"> · </span>');

      html += `
        <div>
          <div class="questionnaire-detail-candidate">${candidateNames}</div>
          <div class="questionnaire-detail-choice ${cls}">${ch.text}</div>
        </div>
      `;
    });
    html += '</div>';

    item.innerHTML = html;
    list.appendChild(item);
  });
}

// ====== SHARE QUESTIONNAIRE ======
function shareQuestionnaireResults() {
  if (!questionnaireState.results || questionnaireState.results.length === 0) return;

  const winner = questionnaireState.results[0];
  const text = `Mon crush politique est ${winner.name} (${winner.affinity}% d'affinité) aux municipales de Paris 2026 ! 💘 Fais le test →`;
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({ title: 'Super Crush Politique 💘 — Municipales Paris 2026', text, url }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text + ' ' + url).then(() => {
      showToast('Copié dans le presse-papier !');
    }).catch(() => fallbackCopy(text + ' ' + url));
  } else {
    fallbackCopy(text + ' ' + url);
  }
}
