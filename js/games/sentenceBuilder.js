/* ==========================================================================
   SENTENCE BUILDER GAME — tap words in the right order to build a sentence.
   Same overall shape as flashcards.js: pick questions -> render -> accept
   answer -> check -> feedback -> next question -> finish. Data source:
   js/data.js -> `sentences` array (word banks + translation, car / animal
   / travel themed).
   ========================================================================== */

games.sentenceBuilder = {
  title: "Sentence Builder",

  init(container, onFinish) {
    const ROUND_SIZE = Math.min(8, sentences.length);
    const questions = shuffle(pickWeighted(sentences, ROUND_SIZE));
    let index = 0;
    let bank = []; // [{ word, uid, used }]
    let answer = []; // array of uid, in chosen order
    let checked = false;

    renderProgressHeader();
    renderQuestion();

    function renderProgressHeader() {
      const header = document.createElement("div");
      header.className = "game-header";
      header.innerHTML = `
        <button class="icon-btn" id="sb-exit" aria-label="Exit game">✕</button>
        <div class="game-progress-track"><div class="game-progress-fill" id="sb-progress"></div></div>
        <span class="game-progress-label" id="sb-progress-label">1 / ${questions.length}</span>`;
      container.appendChild(header);
      document.getElementById("sb-exit").addEventListener("click", () => GameSession.close());

      const stage = document.createElement("div");
      stage.className = "game-stage";
      stage.id = "sb-stage";
      container.appendChild(stage);
    }

    function updateProgressBar() {
      const pct = Math.round((index / questions.length) * 100);
      const fill = document.getElementById("sb-progress");
      const label = document.getElementById("sb-progress-label");
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
      checked = false;
      answer = [];
      bank = shuffle(q.words.map((word, i) => ({ word, uid: `${q.id}-${i}`, used: false })));

      const stage = document.getElementById("sb-stage");
      stage.innerHTML = `
        <div class="flashcard" role="group" aria-label="Sentence builder question">
          <div class="flashcard-icon">🧩</div>
          <div class="sentence-translation-hint">${q.translation}</div>
        </div>
        <div class="answer-strip" id="sb-answer" aria-label="Your sentence"></div>
        <div class="word-bank" id="sb-bank"></div>
        <div class="sentence-builder-actions">
          <button class="btn btn-secondary" id="sb-clear" type="button">Clear</button>
          <button class="btn btn-primary" id="sb-check" type="button" disabled>Check</button>
        </div>
      `;

      document.getElementById("sb-clear").addEventListener("click", () => {
        if (checked) return;
        answer = [];
        bank.forEach((b) => (b.used = false));
        renderBankAndAnswer();
      });
      document.getElementById("sb-check").addEventListener("click", handleCheck);

      renderBankAndAnswer();
    }

    function renderBankAndAnswer() {
      const bankEl = document.getElementById("sb-bank");
      const answerEl = document.getElementById("sb-answer");
      const checkBtn = document.getElementById("sb-check");
      answerEl.classList.remove("correct", "wrong");

      bankEl.innerHTML = "";
      bank
        .filter((b) => !b.used)
        .forEach((b) => {
          const chip = document.createElement("button");
          chip.className = "word-chip";
          chip.type = "button";
          chip.textContent = b.word;
          chip.addEventListener("click", () => {
            b.used = true;
            answer.push(b.uid);
            renderBankAndAnswer();
          });
          bankEl.appendChild(chip);
        });

      answerEl.innerHTML = "";
      answer.forEach((uid) => {
        const item = bank.find((b) => b.uid === uid);
        const chip = document.createElement("button");
        chip.className = "word-chip";
        chip.type = "button";
        chip.textContent = item.word;
        chip.addEventListener("click", () => {
          if (checked) return;
          item.used = false;
          answer = answer.filter((u) => u !== uid);
          renderBankAndAnswer();
        });
        answerEl.appendChild(chip);
      });

      checkBtn.disabled = answer.length !== bank.length;
    }

    function handleCheck() {
      const q = questions[index];
      checked = true;
      const builtSentence = answer.map((uid) => bank.find((b) => b.uid === uid).word);
      const isCorrect = builtSentence.join(" ") === q.words.join(" ");

      document.getElementById("sb-answer").classList.add(isCorrect ? "correct" : "wrong");
      document.querySelectorAll("#sb-bank .word-chip, #sb-answer .word-chip").forEach((c) => (c.disabled = true));
      document.getElementById("sb-check").disabled = true;
      document.getElementById("sb-clear").disabled = true;

      if (!isCorrect) {
        document.getElementById("sb-stage").classList.add("shake");
        setTimeout(() => document.getElementById("sb-stage").classList.remove("shake"), 400);
      }

      GameSession.checkAnswer(q.id, isCorrect);

      setTimeout(() => {
        index += 1;
        renderQuestion();
      }, 1300);
    }
  },
};
