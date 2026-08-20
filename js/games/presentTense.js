/* ==========================================================================
   PRESENT TENSE GAME — gap-fill drill for Simple Present (base vs -s form).
   Same shape as toBe.js: pick questions -> render -> accept answer -> check
   -> feedback -> next question -> finish. Data source: js/data.js ->
   `presentSimple` array (car / animal / travel themed, options pre-built
   per item since the correct conjugation depends on the specific verb).
   ========================================================================== */

games.presentTense = {
  title: "Simple Present",

  init(container, onFinish) {
    const ROUND_SIZE = 8;
    const questions = shuffle(pickWeighted(presentSimple, ROUND_SIZE));
    let index = 0;

    renderProgressHeader();
    renderQuestion();

    function renderProgressHeader() {
      const header = document.createElement("div");
      header.className = "game-header";
      header.innerHTML = `
        <button class="icon-btn" id="pt-exit" aria-label="Exit game">✕</button>
        <div class="game-progress-track"><div class="game-progress-fill" id="pt-progress"></div></div>
        <span class="game-progress-label" id="pt-progress-label">1 / ${questions.length}</span>`;
      container.appendChild(header);
      document.getElementById("pt-exit").addEventListener("click", () => GameSession.close());

      const stage = document.createElement("div");
      stage.className = "game-stage";
      stage.id = "pt-stage";
      container.appendChild(stage);
    }

    function updateProgressBar() {
      const pct = Math.round((index / questions.length) * 100);
      const fill = document.getElementById("pt-progress");
      const label = document.getElementById("pt-progress-label");
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
      const stage = document.getElementById("pt-stage");
      const [before, after] = q.sentence.split("___");

      stage.innerHTML = `
        <div class="flashcard" role="group" aria-label="Present tense question">
          <div class="flashcard-icon">${q.icon || "🗣️"}</div>
          <div class="flashcard-prompt">${before}<span class="tb-blank">___</span>${after}</div>
          <div class="flashcard-hint">${q.bulgarian}</div>
        </div>
        <div class="options-grid" id="pt-options"></div>
      `;

      const optionsGrid = document.getElementById("pt-options");
      shuffle(q.options).forEach((verbForm) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.type = "button";
        btn.textContent = verbForm;
        btn.addEventListener("click", () => handleAnswer(btn, verbForm, q));
        optionsGrid.appendChild(btn);
      });
    }

    function handleAnswer(button, chosen, q) {
      const allButtons = document.querySelectorAll("#pt-options .option-btn");
      allButtons.forEach((b) => (b.disabled = true));

      const isCorrect = chosen === q.correct;
      button.classList.add(isCorrect ? "correct" : "wrong");

      if (!isCorrect) {
        allButtons.forEach((b) => {
          if (b.textContent === q.correct) b.classList.add("correct");
        });
        document.getElementById("pt-stage").classList.add("shake");
        setTimeout(() => document.getElementById("pt-stage").classList.remove("shake"), 400);
      }

      GameSession.checkAnswer(q.id, isCorrect);

      setTimeout(() => {
        index += 1;
        renderQuestion();
      }, 900);
    }
  },
};
