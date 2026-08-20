/* ==========================================================================
   FLASHCARDS GAME — the reference implementation.
   This proves the engine architecture works end to end:
   pick questions -> render -> accept answer -> check -> feedback ->
   next question -> finish -> result screen.

   Future game modules (toBe.js, pastTense.js, sentenceBuilder.js, ...)
   should follow this exact same shape.
   ========================================================================== */

games.flashcards = {
  title: "Vocabulary Flashcards",

  init(container, onFinish) {
    const ROUND_SIZE = 8;
    const questions = buildQuestions(pickWeighted(vocabulary, ROUND_SIZE));
    let index = 0;

    renderProgressHeader();
    renderQuestion();

    function buildQuestions(words) {
      // Mix of EN->BG and BG->EN, each with 3 wrong options + 1 correct.
      return shuffle(words).map((word) => {
        const direction = Math.random() > 0.5 ? "en-bg" : "bg-en";
        const prompt = direction === "en-bg" ? word.english : word.bulgarian;
        const correctAnswer = direction === "en-bg" ? word.bulgarian : word.english;
        const distractors = shuffle(vocabulary.filter((w) => w.id !== word.id))
          .slice(0, 3)
          .map((w) => (direction === "en-bg" ? w.bulgarian : w.english));
        const options = shuffle([correctAnswer, ...distractors]);
        return { word, direction, prompt, correctAnswer, options };
      });
    }

    function renderProgressHeader() {
      const header = document.createElement("div");
      header.className = "game-header";
      header.innerHTML = `
        <button class="icon-btn" id="fc-exit" aria-label="Exit game">✕</button>
        <div class="game-progress-track"><div class="game-progress-fill" id="fc-progress"></div></div>
        <span class="game-progress-label" id="fc-progress-label">1 / ${questions.length}</span>`;
      container.appendChild(header);
      document.getElementById("fc-exit").addEventListener("click", () => GameSession.close());

      const stage = document.createElement("div");
      stage.className = "game-stage";
      stage.id = "fc-stage";
      container.appendChild(stage);
    }

    function updateProgressBar() {
      const pct = Math.round((index / questions.length) * 100);
      const fill = document.getElementById("fc-progress");
      const label = document.getElementById("fc-progress-label");
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
      const stage = document.getElementById("fc-stage");

      stage.innerHTML = `
        <div class="flashcard" role="group" aria-label="Flashcard question">
          <div class="flashcard-icon">${q.word.icon || "🃏"}</div>
          <div class="flashcard-prompt">${q.prompt}</div>
          <div class="flashcard-hint">${q.direction === "en-bg" ? "What does this mean?" : "How do you say this in English?"}</div>
        </div>
        <div class="options-grid" id="fc-options"></div>
      `;

      const optionsGrid = document.getElementById("fc-options");
      q.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.type = "button";
        btn.textContent = opt;
        btn.addEventListener("click", () => handleAnswer(btn, opt, q));
        optionsGrid.appendChild(btn);
      });
    }

    function handleAnswer(button, chosen, q) {
      const allButtons = document.querySelectorAll("#fc-options .option-btn");
      allButtons.forEach((b) => (b.disabled = true));

      const isCorrect = chosen === q.correctAnswer;
      button.classList.add(isCorrect ? "correct" : "wrong");
      revealPronunciation(document.querySelector("#fc-stage .flashcard"), q.word.english);

      if (!isCorrect) {
        allButtons.forEach((b) => {
          if (b.textContent === q.correctAnswer) b.classList.add("correct");
        });
        document.getElementById("fc-stage").classList.add("shake");
        setTimeout(() => document.getElementById("fc-stage").classList.remove("shake"), 400);
      }

      GameSession.checkAnswer(q.word.id, isCorrect);

      setTimeout(() => {
        index += 1;
        renderQuestion();
      }, 900);
    }
  },
};
