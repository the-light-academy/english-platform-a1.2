/* ==========================================================================
   PROGRESS.JS
   Single source of truth for the student's progress. Every game reports
   results back through this module; every UI piece (header, progress bar,
   learning map, cards) reads from it. Nothing else should mutate this
   state directly — always go through the exported functions.
   ========================================================================== */

const STORAGE_KEY = "englishAdventure.progress.v1";

/* Default / initial state shape. Extend this object (not the functions)
   when new features are added (badges, leaderboard position, etc). */
function createDefaultProgress() {
  return {
    points: 0,
    xp: 0,
    level: 1,
    xpToNextLevel: 200,
    streak: 0,
    lastPlayedDate: null,
    completedLessons: [],      // array of learningMap ids
    completedGames: 0,
    vocabularyMastery: 0,      // 0-100, derived from wordStats
    grammarMastery: 0,         // 0-100, derived from wordStats
    dailyChallenge: {
      date: null,
      target: 5,
      done: 0,
      completed: false,
    },
    // Spaced-repetition style stats, keyed by item id (word/verb id).
    // Future adaptive algorithms plug in here without changing the shape.
    wordStats: {
      // "v1": { correct: 2, incorrect: 1, mastery: 60 }
    },
  };
}

let studentProgress = loadProgress();

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultProgress();
    const saved = JSON.parse(raw);
    // Merge with defaults so new fields introduced later don't break old saves.
    return Object.assign(createDefaultProgress(), saved);
  } catch (e) {
    console.warn("Could not load progress, starting fresh.", e);
    return createDefaultProgress();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studentProgress));
  } catch (e) {
    console.warn("Could not save progress.", e);
  }
  renderProgressUI();
}

/* ---- POINTS / XP / LEVELS ------------------------------------------------ */

function addPoints(amount) {
  studentProgress.points += amount;
  studentProgress.xp += amount;

  while (studentProgress.xp >= studentProgress.xpToNextLevel) {
    studentProgress.xp -= studentProgress.xpToNextLevel;
    studentProgress.level += 1;
    studentProgress.xpToNextLevel = Math.round(studentProgress.xpToNextLevel * 1.25);
    celebrateLevelUp(studentProgress.level);
  }
  saveProgress();
}

/* ---- STREAK ---------------------------------------------------------------
   Call once per session/day the student plays. */
function registerDailyActivity() {
  const today = new Date().toISOString().slice(0, 10);
  if (studentProgress.lastPlayedDate === today) return;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (studentProgress.lastPlayedDate === yesterday) {
    studentProgress.streak += 1;
  } else {
    studentProgress.streak = 1;
  }
  studentProgress.lastPlayedDate = today;

  if (studentProgress.dailyChallenge.date !== today) {
    studentProgress.dailyChallenge = { date: today, target: 5, done: 0, completed: false };
  }
  saveProgress();
}

function registerDailyChallengeProgress(amount = 1) {
  const dc = studentProgress.dailyChallenge;
  if (dc.completed) return;
  dc.done = Math.min(dc.target, dc.done + amount);
  if (dc.done >= dc.target) dc.completed = true;
  saveProgress();
}

/* ---- LESSON / GAME COMPLETION --------------------------------------------- */

function markLessonCompleted(lessonId) {
  if (!studentProgress.completedLessons.includes(lessonId)) {
    studentProgress.completedLessons.push(lessonId);
  }
  studentProgress.completedGames += 1;
  saveProgress();
}

function isLessonCompleted(lessonId) {
  return studentProgress.completedLessons.includes(lessonId);
}

/* Lesson N is unlocked if lesson N-1 is completed (or it's the first one). */
function getLessonStatus(lesson, index, allLessons) {
  if (isLessonCompleted(lesson.id)) return "completed";
  if (index === 0) return "current";
  const prev = allLessons[index - 1];
  return isLessonCompleted(prev.id) ? "current" : "locked";
}

/* ---- WORD-LEVEL MASTERY / REPETITION --------------------------------------
   This is the hook future adaptive/spaced-repetition logic builds on.
   Each call nudges an item's mastery score; low-mastery items should be
   surfaced more often by game modules (see engine.js pickWeighted). */
function recordAnswer(itemId, wasCorrect) {
  if (!studentProgress.wordStats[itemId]) {
    studentProgress.wordStats[itemId] = { correct: 0, incorrect: 0, mastery: 0 };
  }
  const stat = studentProgress.wordStats[itemId];
  if (wasCorrect) {
    stat.correct += 1;
    stat.mastery = Math.min(100, stat.mastery + 20);
  } else {
    stat.incorrect += 1;
    stat.mastery = Math.max(0, stat.mastery - 15);
  }
  recalculateMasteryTotals();
  saveProgress();
}

function recalculateMasteryTotals() {
  const stats = Object.values(studentProgress.wordStats);
  if (stats.length === 0) return;
  const avg = stats.reduce((sum, s) => sum + s.mastery, 0) / stats.length;
  // Simple placeholder split; once grammar-specific ids exist this can
  // filter by category instead of applying the same average to both.
  studentProgress.vocabularyMastery = Math.round(avg);
  studentProgress.grammarMastery = Math.round(avg * 0.85);
}

/* ---- RENDERING -------------------------------------------------------------
   Keeps all DOM writes for "global" progress UI in one place. */
function renderProgressUI() {
  const pointsEl = document.getElementById("stat-points");
  const streakEl = document.getElementById("stat-streak");
  const levelEl = document.getElementById("stat-level");
  const barEl = document.getElementById("level-progress-bar");
  const barLabel = document.getElementById("level-progress-label");
  const dcBar = document.getElementById("daily-challenge-bar");
  const dcLabel = document.getElementById("daily-challenge-label");
  const dcButton = document.getElementById("daily-challenge-btn");

  if (pointsEl) pointsEl.textContent = `⭐ ${studentProgress.points}`;
  if (streakEl) streakEl.textContent = `🔥 ${studentProgress.streak} day${studentProgress.streak === 1 ? "" : "s"}`;
  if (levelEl) levelEl.textContent = `Level ${studentProgress.level}`;

  const pct = Math.round((studentProgress.xp / studentProgress.xpToNextLevel) * 100);
  if (barEl) barEl.style.width = `${pct}%`;
  if (barLabel) barLabel.textContent = `${pct}%`;

  const dc = studentProgress.dailyChallenge;
  const dcPct = Math.round((dc.done / dc.target) * 100);
  if (dcBar) dcBar.style.width = `${dcPct}%`;
  if (dcLabel) dcLabel.textContent = `${dc.done} / ${dc.target} completed`;
  if (dcButton) dcButton.textContent = dc.completed ? "✅ Done for today!" : "START";

  if (typeof renderLearningMap === "function") renderLearningMap();
}

function celebrateLevelUp(newLevel) {
  const toast = document.createElement("div");
  toast.className = "toast level-up-toast";
  toast.innerHTML = `🎉 <strong>Level Up!</strong> You reached Level ${newLevel}!`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}
