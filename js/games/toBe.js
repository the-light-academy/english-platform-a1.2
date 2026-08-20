/* ==========================================================================
   TO BE GAME — gap-fill drill for am / is / are.
   Same shape as flashcards.js: pick questions -> render -> accept answer ->
   check -> feedback -> next question -> finish. Data source: js/data.js
   -> `toBe` array (car / animal / travel themed sentences + core pronouns).
   ========================================================================== */

games.toBe = {
  title: "To Be Challenge",

  init(container, onFinish) {
    const ROUND_SIZE = 8;
    const VERBS = ["am", "is", "are"];
    const questions = shuffle(pickWeighted(toBe, ROUND_SIZE));
    let index = 0;

    renderProgressHeader();
    renderQuestion();

    function renderProgressHeader() {
      const header = document.createElement("div");
      header.className = "game-header";
      header.innerHTML = `
        <button class="icon-btn" id="tb-exit" aria-label="Exit game">✕</button>
        <div class="game-progress-track"><div class="game-progress-fill" id="tb-progress"></div></div>
        <span class="game-progress-label" id="tb-progress-label">1 / ${questions.length}</span>`;
      container.appendChild(header);
      document.getElementById("tb-exit").addEventListener("click", () => GameSession.close());

      const stage = document.createElement("div");
      stage.className = "game-stage";
      stage.id = "tb-stage";
      container.appendChild(stage);
    }

    function updateProgressBar() {
      const pct = Math.round((index / questions.length) * 100);
      const fill = document.getElementById("tb-progress");
      const label = document.getElementById("tb-progress-label");
      if (fill) fill.style.width = `${pct}%`;
      if (label) label.textContent = `${Math.min(index + 1, questions.length)} / ${questions.length}`;
    }

    function renderQuestion() {
      if (index >= questions.length) {
        onFinish();
        return;
      }
      updateProgressBar();
      const q = questions[index];
      const stage = document.getElementById("tb-stage");
      const [before, after] = q.sentence.split("___");

      stage.innerHTML = `
        <div class="flashcard" role="group" aria-label="To Be question">
          <div class="flashcard-icon">${q.icon || "⚡"}</div>
          <div class="flashcard-prompt">${before}<span class="tb-blank">___</span>${after}</div>
          <div class="flashcard-hint">${q.bulgarian}</div>
        </div>
        <div class="options-grid" id="tb-options"></div>
      `;

      const optionsGrid = document.getElementById("tb-options");
      VERBS.forEach((verb) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.type = "button";
        btn.textContent = verb;
        btn.addEventListener("click", () => handleAnswer(btn, verb, q));
        optionsGrid.appendChild(btn);
      });
    }

    function handleAnswer(button, chosen, q) {
      const allButtons = document.querySelectorAll("#tb-options .option-btn");
      allButtons.forEach((b) => (b.disabled = true));

      const isCorrect = chosen === q.verb;
      button.classList.add(isCorrect ? "correct" : "wrong");
      revealPronunciation(document.querySelector("#tb-stage .flashcard"), q.sentence.replace("___", q.verb));

      if (!isCorrect) {
        allButtons.forEach((b) => {
          if (b.textContent === q.verb) b.classList.add("correct");
        });
        document.getElementById("tb-stage").classList.add("shake");
        setTimeout(() => document.getElementById("tb-stage").classList.remove("shake"), 400);
      }

      GameSession.checkAnswer(q.id, isCorrect);

      setTimeout(() => {
        index += 1;
        renderQuestion();
      }, 900);
    }
  },
};
