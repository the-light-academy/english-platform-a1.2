/* ==========================================================================
   ENGINE.JS — the Game Engine
   ==========================================================================
   This is the contract every game module must follow. A "game module" is a
   plain object registered in `games` with these methods:

     games.myGame = {
       title: "My Game",
       init(container, onFinish) { ... }   // build the DOM, start round 1
     };

   Everything else — showing the container, tracking score, awarding XP,
   updating word mastery, rendering the result screen — is handled ONCE,
   here, so every future game gets it for free and behaves consistently.

   A game module calls back into the engine helpers below instead of
   re-implementing scoring/feedback/results itself:

     GameSession.checkAnswer(itemId, isCorrect)  -> updates score + mastery
     GameSession.showFeedback(isCorrect, message) -> the flying feedback popup
     GameSession.finish()                         -> shows the Result Screen

   This is intentionally the ONLY working game for now (Flashcards). The
   other entries in `games` are stubs that show a "coming soon" state so the
   navigation / learning map can already link to them.
   ========================================================================== */

const games = {}; // populated by js/games/*.js

const GameSession = {
  current: null, // { key, lesson, score, total, container }

  /* Entry point used by the Learning Map / Game Cards. */
  start(gameKey, lesson) {
    const gameModule = games[gameKey];
    const container = document.getElementById("game-container");
    const overlay = document.getElementById("game-overlay");
    if (!gameModule || !container || !overlay) return;

    this.current = { key: gameKey, lesson, score: 0, total: 0, container };

    overlay.classList.add("open");
    document.body.classList.add("game-open");
    container.innerHTML = "";
    container.setAttribute("aria-label", `${gameModule.title} game`);

    if (typeof gameModule.init === "function") {
      gameModule.init(container, () => this.finish());
    } else {
      this.renderComingSoon(container, gameModule.title || lesson.title);
    }
  },

  renderComingSoon(container, title) {
    container.innerHTML = `
      <div class="coming-soon">
        <div class="coming-soon-icon">🛠️</div>
        <h3>${title} is under construction</h3>
        <p>This mission is being built next. Check back soon!</p>
        <button class="btn btn-primary" id="coming-soon-close">Back to map</button>
      </div>`;
    document.getElementById("coming-soon-close").addEventListener("click", () => this.close());
  },

  /* Called by a game module for every question answered. */
  checkAnswer(itemId, isCorrect) {
    if (!this.current) return;
    this.current.total += 1;
    if (isCorrect) this.current.score += 1;
    if (itemId) recordAnswer(itemId, isCorrect);
    this.showFeedback(isCorrect);
  },

  /* Small floating feedback bubble — the "emotional" feedback from spec §11. */
  showFeedback(isCorrect, customMessage) {
    const el = document.getElementById("feedback-popup");
    if (!el) return;
    const messages = isCorrect
      ? ["🎉 Great!", "✨ Excellent!", "🌟 Awesome!", "👏 Nice one!"]
      : ["💪 Almost! Try again", "🤔 Not quite!", "🔁 Keep going!"];
    el.textContent = customMessage || messages[Math.floor(Math.random() * messages.length)];
    el.className = `feedback-popup show ${isCorrect ? "correct" : "wrong"}`;
    clearTimeout(this._feedbackTimer);
    this._feedbackTimer = setTimeout(() => el.classList.remove("show"), 900);
  },

  /* Called by a game module when it has no more questions. */
  finish() {
    if (!this.current) return;
    const { key, lesson, score, total } = this.current;
    const xpEarned = Math.round((lesson.xp || 50) * (total ? score / total : 0)) + score * 5;

    markLessonCompleted(lesson.id);
    addPoints(xpEarned);
    registerDailyChallengeProgress(1);

    this.renderResultScreen({ lesson, score, total, xpEarned });
  },

  renderResultScreen({ lesson, score, total, xpEarned }) {
    const container = this.current.container;
    const pct = total ? Math.round((score / total) * 100) : 0;
    container.innerHTML = `
      <div class="result-screen">
        <div class="result-emoji">${pct >= 80 ? "🏆" : pct >= 50 ? "🎉" : "💪"}</div>
        <h2>Mission Complete!</h2>
        <p class="result-score">${score} / ${total} correct</p>
        <div class="result-stat">⭐ +${xpEarned} XP</div>
        <div class="result-mastery">
          <span>Vocabulary Mastery</span>
          <div class="progress-track"><div class="progress-fill" style="width:${studentProgress.vocabularyMastery}%"></div></div>
        </div>
        <div class="result-actions">
          <button class="btn btn-secondary" id="result-replay">Play Again</button>
          <button class="btn btn-primary" id="result-next">Next Mission</button>
        </div>
      </div>`;

    document.getElementById("result-replay").addEventListener("click", () => {
      this.start(this.current.key, lesson);
    });
    document.getElementById("result-next").addEventListener("click", () => this.close());
  },

  close() {
    const overlay = document.getElementById("game-overlay");
    if (overlay) overlay.classList.remove("open");
    document.body.classList.remove("game-open");
    this.current = null;
    renderProgressUI();
  },
};

/* Global helper used by cards / learning map / daily challenge buttons. */
function startGame(gameKey, lessonId) {
  const lesson = learningMap.find((l) => l.gameKey === gameKey || l.id === lessonId) || {
    id: gameKey,
    title: gameKey,
    xp: 50,
  };
  registerDailyActivity();
  GameSession.start(gameKey, lesson);
}

/* Utility other game modules can reuse: pick questions weighted towards
   items the student has NOT yet mastered (spec §12, repetition system). */
function pickWeighted(items, count) {
  const weighted = items.map((item) => {
    const stat = studentProgress.wordStats[item.id];
    const mastery = stat ? stat.mastery : 0;
    return { item, weight: 100 - mastery + 10 }; // lower mastery = more likely
  });
  const picked = [];
  const pool = [...weighted];
  while (picked.length < Math.min(count, items.length) && pool.length) {
    const totalWeight = pool.reduce((s, w) => s + w.weight, 0);
    let r = Math.random() * totalWeight;
    let idx = 0;
    for (; idx < pool.length; idx++) {
      r -= pool[idx].weight;
      if (r <= 0) break;
    }
    picked.push(pool[idx].item);
    pool.splice(idx, 1);
  }
  return picked;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
