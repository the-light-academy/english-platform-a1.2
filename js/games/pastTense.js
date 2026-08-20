/* ==========================================================================
   PAST TENSE GAME — gap-fill drill for irregular/regular past forms.
   Same shape as flashcards.js: pick questions -> render -> accept answer ->
   check -> feedback -> next question -> finish. Data source: js/data.js ->
   `verbs` array (base/past pairs, car / animal / travel themed contexts).
   ========================================================================== */

games.pastTense = {
  title: "Past Tense",

  init(container, onFinish) {
    const ROUND_SIZE = 8;
    const questions = buildQuestions(pickWeighted(verbs, ROUND_SIZE));
    let index = 0;

    renderProgressHeader();
    renderQuestion();

    function buildQuestions(items) {
      return shuffle(items).map((verb) => {
        const distractors = shuffle(verbs.filter((v) => v.id !== verb.id))
          .slice(0, 3)
          .map((v) => v.past);
        const options = shuffle([verb.past, ...distractors]);
        return { verb, options };
      });
    }

    function renderProgressHeader() {
      const header = document.createElement("div");
      header.className = "game-header";
      header.innerHTML = `
        <button class="icon-btn" id="pst-exit" aria-label="Exit game">✕</button>
        <div class="game-progress-track"><div class="game-progress-fill" id="pst-progress"></div></div>
        <span class="game-progress-label" id="pst-progress-label">1 / ${questions.length}</span>`;
      container.appendChild(header);
      document.getElementById("pst-exit").addEventListener("click", () => GameSession.close());

      const stage = document.createElement("div");
      stage.className = "game-stage";
      stage.id = "pst-stage";
      container.appendChild(stage);
    }

    function updateProgressBar() {
      const pct = Math.round((index / questions.length) * 100);
      const fill = document.getElementById("pst-progress");
      const label = document.getElementById("pst-progress-label");
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
      const stage = document.getElementById("pst-stage");
      const [before, after] = q.verb.context.split("___");

      stage.innerHTML = `
        <div class="flashcard" role="group" aria-label="Past tense question">
          <div class="flashcard-icon">${q.verb.icon || "⏳"}</div>
          <div class="flashcard-prompt">${before}<span class="tb-blank">___</span>${after}</div>
          <div class="flashcard-hint">${q.verb.base} → ${q.verb.bulgarian}</div>
        </div>
        <div class="options-grid" id="pst-options"></div>
      `;

      const optionsGrid = document.getElementById("pst-options");
      q.options.forEach((pastForm) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.type = "button";
        btn.textContent = pastForm;
        btn.addEventListener("click", () => handleAnswer(btn, pastForm, q));
        optionsGrid.appendChild(btn);
      });
    }

    function handleAnswer(button, chosen, q) {
      const allButtons = document.querySelectorAll("#pst-options .option-btn");
      allButtons.forEach((b) => (b.disabled = true));

      const isCorrect = chosen === q.verb.past;
      button.classList.add(isCorrect ? "correct" : "wrong");

      if (!isCorrect) {
        allButtons.forEach((b) => {
          if (b.textContent === q.verb.past) b.classList.add("correct");
        });
        document.getElementById("pst-stage").classList.add("shake");
        setTimeout(() => document.getElementById("pst-stage").classList.remove("shake"), 400);
      }

      GameSession.checkAnswer(q.verb.id, isCorrect);

      setTimeout(() => {
        index += 1;
        renderQuestion();
      }, 900);
    }
  },
};
