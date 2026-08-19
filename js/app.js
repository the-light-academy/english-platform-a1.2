/* ==========================================================================
   APP.JS
   Boots the page: renders the Learning Map + Lesson Cards from data.js,
   wires up navigation buttons, and does the initial progress render.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderLearningMap();
  renderLessonCards();
  renderProgressUI();
  bindHeroButtons();
  bindDailyChallenge();
});

/* ---- LEARNING MAP --------------------------------------------------------- */
function renderLearningMap() {
  const mapEl = document.getElementById("learning-map");
  if (!mapEl) return;

  mapEl.innerHTML = "";
  learningMap.forEach((lesson, index) => {
    const status = getLessonStatus(lesson, index, learningMap);

    const node = document.createElement("li");
    node.className = `map-node map-node--${status}`;

    const statusIcon = status === "completed" ? "🟢" : status === "current" ? "🟡" : "🔒";
    const statusLabel = status === "completed" ? "Completed" : status === "current" ? "In Progress" : "Locked";

    node.innerHTML = `
      <button class="map-node-btn" type="button" ${status === "locked" ? "disabled" : ""}
        aria-label="${lesson.title}: ${statusLabel}">
        <span class="map-node-icon">${lesson.icon}</span>
        <span class="map-node-order">${lesson.order}</span>
      </button>
      <div class="map-node-info">
        <span class="map-node-status">${statusIcon} ${statusLabel}</span>
        <span class="map-node-title">${lesson.title}</span>
      </div>
    `;

    const btn = node.querySelector(".map-node-btn");
    if (status !== "locked") {
      btn.addEventListener("click", () => startGame(lesson.gameKey, lesson.id));
    }

    mapEl.appendChild(node);
  });
}

/* ---- LESSON / GAME CARDS --------------------------------------------------- */
function renderLessonCards() {
  const gridEl = document.getElementById("lesson-cards");
  if (!gridEl) return;

  gridEl.innerHTML = "";
  learningMap.forEach((lesson, index) => {
    const status = getLessonStatus(lesson, index, learningMap);

    const card = document.createElement("article");
    card.className = "lesson-card";

    card.innerHTML = `
      <div class="lesson-card-icon">${lesson.icon}</div>
      <h3 class="lesson-card-title">${lesson.title}</h3>
      <p class="lesson-card-desc">${lesson.description}</p>
      <div class="lesson-card-meta">
        <span class="badge badge-xp">⭐ +${lesson.xp} XP</span>
        <span class="badge badge-status badge-status--${status}">${
      status === "completed" ? "Completed" : status === "current" ? "Available" : "Locked"
    }</span>
      </div>
      <button class="btn btn-primary lesson-card-btn" type="button" ${status === "locked" ? "disabled" : ""}>
        ${status === "completed" ? "Play Again" : "START"}
      </button>
    `;

    const btn = card.querySelector(".lesson-card-btn");
    if (status !== "locked") {
      btn.addEventListener("click", () => startGame(lesson.gameKey, lesson.id));
    }

    gridEl.appendChild(card);
  });
}

/* ---- HERO BUTTONS ----------------------------------------------------------- */
function bindHeroButtons() {
  const continueBtn = document.getElementById("hero-continue");
  const chooseBtn = document.getElementById("hero-choose");

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      const nextLesson =
        learningMap.find((l, i) => getLessonStatus(l, i, learningMap) === "current") || learningMap[0];
      startGame(nextLesson.gameKey, nextLesson.id);
    });
  }
  if (chooseBtn) {
    chooseBtn.addEventListener("click", () => {
      document.getElementById("learning-map-section").scrollIntoView({ behavior: "smooth" });
    });
  }
}

/* ---- DAILY CHALLENGE --------------------------------------------------------- */
function bindDailyChallenge() {
  const btn = document.getElementById("daily-challenge-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (studentProgress.dailyChallenge.completed) return;
    startGame("flashcards", "vocabulary");
  });
}
