// ====== STATE ======
let quizState = {
  totalQuestions: 0,
  currentIndex: 0,
  selectedPropositions: [],
  scores: {},
  counts: {},
  answers: [],        // { proposition, type: 'favorable'|'defavorable'|'neutre' }
  comparisonCandidates: [],
  results: null,
  isAnimating: false
};

// ====== SCREEN NAVIGATION ======
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('screen-' + screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
  if (screenId === 'comparaison') {
    initComparison();
  }
  if (screenId === 'detail') {
    renderDetail('favorable');
  }
}

// ====== PROPOSITION SELECTION ======
function selectPropositions(count) {
  const byCand = {};
  CANDIDATES.forEach(c => { byCand[c.id] = []; });
  PROPOSITIONS.forEach(p => {
    if (byCand[p.candidateId]) byCand[p.candidateId].push(p);
  });

  Object.values(byCand).forEach(arr => shuffleArray(arr));

  const selected = [];
  const candidateIds = CANDIDATES.map(c => c.id);
  let round = 0;

  while (selected.length < count) {
    let addedThisRound = false;
    for (const cid of candidateIds) {
      if (selected.length >= count) break;
      if (round < byCand[cid].length) {
        selected.push(byCand[cid][round]);
        addedThisRound = true;
      }
    }
    round++;
    if (!addedThisRound) break;
  }

  shuffleArray(selected);
  return selected;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ====== START QUIZ ======
function startQuiz(count) {
  quizState.totalQuestions = count;
  quizState.currentIndex = 0;
  quizState.selectedPropositions = selectPropositions(count);
  quizState.scores = {};
  quizState.counts = {};
  quizState.isAnimating = false;
  quizState.answers = [];

  CANDIDATES.forEach(c => {
    quizState.scores[c.id] = 0;
    quizState.counts[c.id] = 0;
  });

  quizState.selectedPropositions.forEach(p => {
    quizState.counts[p.candidateId]++;
  });

  showScreen('quiz');
  renderCard();
}

// ====== RENDER CARD ======
function renderCard() {
  const { currentIndex, totalQuestions, selectedPropositions } = quizState;

  const pct = (currentIndex / totalQuestions) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = (currentIndex + 1) + ' / ' + totalQuestions;

  if (currentIndex >= totalQuestions) {
    showResults();
    return;
  }

  const prop = selectedPropositions[currentIndex];
  const card = document.getElementById('swipe-card');

  card.className = 'card card-active';
  card.style.transform = '';
  card.style.opacity = '';
  resetOverlays();

  document.getElementById('card-theme').textContent = prop.theme;
  document.getElementById('card-text').textContent = prop.text;

  quizState.isAnimating = false;
}

function resetOverlays() {
  document.getElementById('overlay-favorable').style.opacity = '0';
  document.getElementById('overlay-defavorable').style.opacity = '0';
  document.getElementById('overlay-neutre').style.opacity = '0';
}

// ====== ANSWER ======
function answer(type) {
  if (quizState.isAnimating) return;
  const prop = quizState.selectedPropositions[quizState.currentIndex];
  if (!prop) return;

  quizState.isAnimating = true;

  // Enregistrer la réponse
  quizState.answers.push({ proposition: prop, type });

  if (type === 'favorable') {
    quizState.scores[prop.candidateId] += 1;
  } else if (type === 'defavorable') {
    quizState.scores[prop.candidateId] -= 1;
  }

  // Haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(8);
  }

  const card = document.getElementById('swipe-card');
  if (type === 'favorable') {
    card.classList.add('fly-right');
  } else if (type === 'defavorable') {
    card.classList.add('fly-left');
  } else {
    card.classList.add('fly-up');
  }

  setTimeout(() => {
    quizState.currentIndex++;
    renderCard();
  }, 300);
}

// ====== SWIPE MECHANICS ======
let swipeData = {
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  isDragging: false,
  startTime: 0
};

// Adaptive thresholds: smaller on mobile
const isMobile = 'ontouchstart' in window;
const SWIPE_THRESHOLD_X = isMobile ? 60 : 100;
const SWIPE_THRESHOLD_Y = isMobile ? 50 : 80;
const VELOCITY_THRESHOLD = 0.4; // px/ms — fast flick detection

function initSwipe() {
  const zone = document.getElementById('swipe-zone');

  zone.addEventListener('touchstart', onSwipeStart, { passive: true });
  zone.addEventListener('touchmove', onSwipeMove, { passive: false });
  zone.addEventListener('touchend', onSwipeEnd);
  zone.addEventListener('touchcancel', onSwipeEnd);

  zone.addEventListener('mousedown', onSwipeStart);
  zone.addEventListener('mousemove', onSwipeMove);
  zone.addEventListener('mouseup', onSwipeEnd);
  zone.addEventListener('mouseleave', onSwipeEnd);
}

function getEventXY(e) {
  if (e.touches && e.touches.length > 0) {
    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
  return { x: e.clientX, y: e.clientY };
}

function onSwipeStart(e) {
  if (e.target.closest('.action-buttons') || e.target.closest('.btn-back') || e.target.closest('.quiz-header')) return;
  if (quizState.isAnimating || quizState.currentIndex >= quizState.totalQuestions) return;

  const { x, y } = getEventXY(e);
  swipeData.startX = x;
  swipeData.startY = y;
  swipeData.currentX = x;
  swipeData.currentY = y;
  swipeData.isDragging = true;
  swipeData.startTime = Date.now();

  const card = document.getElementById('swipe-card');
  card.classList.add('dragging');
}

function onSwipeMove(e) {
  if (!swipeData.isDragging) return;
  if (e.touches) e.preventDefault();

  const { x, y } = getEventXY(e);
  swipeData.currentX = x;
  swipeData.currentY = y;

  const dx = x - swipeData.startX;
  const dy = y - swipeData.startY;

  const card = document.getElementById('swipe-card');
  const rotation = dx * 0.08;
  card.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotation}deg)`;

  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  resetOverlays();

  if (absDx > absDy && absDx > 15) {
    const opacity = Math.min(absDx / SWIPE_THRESHOLD_X, 1);
    if (dx > 0) {
      document.getElementById('overlay-favorable').style.opacity = opacity;
    } else {
      document.getElementById('overlay-defavorable').style.opacity = opacity;
    }
  } else if (dy < -15 && absDy > absDx) {
    const opacity = Math.min(absDy / SWIPE_THRESHOLD_Y, 1);
    document.getElementById('overlay-neutre').style.opacity = opacity;
  }
}

function onSwipeEnd() {
  if (!swipeData.isDragging) return;
  swipeData.isDragging = false;

  const card = document.getElementById('swipe-card');
  card.classList.remove('dragging');

  const dx = swipeData.currentX - swipeData.startX;
  const dy = swipeData.currentY - swipeData.startY;
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  // Velocity detection for fast flicks
  const elapsed = Date.now() - swipeData.startTime;
  const velocityX = absDx / Math.max(elapsed, 1);
  const velocityY = absDy / Math.max(elapsed, 1);
  const fastFlickX = velocityX > VELOCITY_THRESHOLD && absDx > 30;
  const fastFlickY = velocityY > VELOCITY_THRESHOLD && absDy > 25;

  if (absDx > absDy && (absDx >= SWIPE_THRESHOLD_X || fastFlickX)) {
    answer(dx > 0 ? 'favorable' : 'defavorable');
  } else if (dy < 0 && absDy > absDx && (absDy >= SWIPE_THRESHOLD_Y || fastFlickY)) {
    answer('neutre');
  } else {
    // Snap back
    card.classList.add('snap-back');
    card.style.transform = '';
    resetOverlays();
    setTimeout(() => card.classList.remove('snap-back'), 500);
  }
}

// ====== RESULTS ======
function showResults() {
  const results = CANDIDATES.map(c => {
    const score = quizState.scores[c.id];
    const count = quizState.counts[c.id];
    let affinity = 50;
    if (count > 0) {
      affinity = ((score + count) / (2 * count)) * 100;
    }
    affinity = Math.round(Math.max(0, Math.min(100, affinity)));
    return { ...c, affinity };
  });

  results.sort((a, b) => b.affinity - a.affinity);

  const winner = results[0];
  document.getElementById('winner-name').textContent = winner.name;
  document.getElementById('winner-score').textContent = winner.affinity + '%';
  document.getElementById('winner-party').textContent = winner.party;
  const scoreEl = document.getElementById('winner-score');
  scoreEl.style.background = `linear-gradient(135deg, ${winner.color}, var(--cyan))`;
  scoreEl.style.webkitBackgroundClip = 'text';
  scoreEl.style.webkitTextFillColor = 'transparent';
  scoreEl.style.backgroundClip = 'text';

  const barsContainer = document.getElementById('resultats-bars');
  barsContainer.innerHTML = '';

  results.forEach((r, i) => {
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

  showScreen('resultats');

  // Staggered bar animation
  requestAnimationFrame(() => {
    const bars = document.querySelectorAll('.result-bar-fill');
    bars.forEach((bar, i) => {
      setTimeout(() => {
        bar.style.width = bar.dataset.width + '%';
      }, 150 + i * 120);
    });
  });

  quizState.results = results;

  // Celebration
  setTimeout(() => launchConfetti(), 400);
  if (navigator.vibrate) {
    navigator.vibrate([10, 50, 10]);
  }
}

// ====== SHARE ======
function shareResults() {
  if (!quizState.results || quizState.results.length === 0) return;

  const winner = quizState.results[0];
  const text = `Je suis à ${winner.affinity}% d'affinité avec ${winner.name} aux municipales de Paris 2026 ! Fais le test →`;
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({ title: 'Quiz Municipales Paris 2026', text, url }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text + ' ' + url).then(() => {
      showToast('Copié dans le presse-papier !');
    }).catch(() => fallbackCopy(text + ' ' + url));
  } else {
    fallbackCopy(text + ' ' + url);
  }
}

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

// ====== DETAIL ======
function switchDetailTab(tab) {
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.detail-tab[data-tab="${tab}"]`).classList.add('active');
  renderDetail(tab);
}

function renderDetail(tab) {
  const list = document.getElementById('detail-list');
  list.innerHTML = '';

  // Update counts
  const counts = { favorable: 0, defavorable: 0, neutre: 0 };
  quizState.answers.forEach(a => counts[a.type]++);
  document.getElementById('count-favorable').textContent = counts.favorable;
  document.getElementById('count-defavorable').textContent = counts.defavorable;
  document.getElementById('count-neutre').textContent = counts.neutre;

  // Ensure active tab is highlighted
  document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.detail-tab[data-tab="${tab}"]`);
  if (activeTab) activeTab.classList.add('active');

  const filtered = quizState.answers.filter(a => a.type === tab);

  if (filtered.length === 0) {
    const labels = { favorable: 'likée', defavorable: 'rejetée', neutre: 'neutre' };
    list.innerHTML = `<div class="detail-empty">Aucune proposition ${labels[tab]}.</div>`;
    return;
  }

  filtered.forEach((a, i) => {
    const candidate = CANDIDATES.find(c => c.id === a.proposition.candidateId);
    const item = document.createElement('div');
    item.className = `detail-item detail-${tab}`;
    item.style.animationDelay = `${i * 40}ms`;
    item.innerHTML = `
      <div class="detail-item-text">${a.proposition.text}</div>
      <div class="detail-item-meta">
        <span class="detail-item-candidate">
          <span class="detail-candidate-dot" style="background:${candidate.color}"></span>
          ${candidate.name}
        </span>
        <span class="detail-item-theme">${a.proposition.theme}</span>
      </div>
    `;
    list.appendChild(item);
  });
}

// ====== CONFETTI ======
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#7c3aed', '#4f46e5', '#06b6d4', '#10b981', '#ec4899', '#f97316', '#22c55e'];
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
  let animId;

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
      animId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// ====== KEYBOARD ======
document.addEventListener('keydown', (e) => {
  const quizScreen = document.getElementById('screen-quiz');
  if (!quizScreen.classList.contains('active')) return;
  if (quizState.currentIndex >= quizState.totalQuestions) return;

  if (e.key === 'ArrowRight') { e.preventDefault(); answer('favorable'); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); answer('defavorable'); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); answer('neutre'); }
});

// ====== INIT ======
document.addEventListener('DOMContentLoaded', () => {
  initSwipe();
});
