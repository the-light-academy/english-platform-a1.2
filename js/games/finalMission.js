/* ==========================================================================
   FINAL MISSION — "The Road Trip Challenge"
   Combines vocabulary + to-be + present + past + sentence building into one
   round. Same overall shape as the other games (render -> accept answer ->
   check -> feedback -> next -> finish), but each question can be one of
   four types, each with its own render/check pair below.
   ========================================================================== */

games.finalMission = {
  title: "The Road Trip Challenge",

  init(container, onFinish) {
    const questions = shuffle([
      ...buildVocabQuestions(pickWeighted(vocabulary, 3)),
      ...buildGapFillQuestions(pickWeighted(toBe, 3), "toBe"),
      ...buildGapFillQuestions(pickWeighted(presentSimple, 3), "present"),
      ...buildGapFillQuestions(pickWeighted(verbs, 3), "past"),
      ...buildOrderQuestions(pickWeighted(sentences, 2)),
    ]);
    let index = 0;

    renderProgressHeader();
    renderQuestion();

    /* ---- question builders -------------------------------------------- */

    function buildVocabQuestions(words) {
      return words.map((word) => {
        const direction = Math.random() > 0.5 ? "en-bg" : "bg-en";
        const prompt = direction === "en-bg" ? word.english : word.bulgarian;
        const correctAnswer = direction === "en-bg" ? word.bulgarian : word.english;
        const distractors = shuffle(vocabulary.filter((w) => w.id !== word.id))
          .slice(0, 3)
          .map((w) => (direction === "en-bg" ? w.bulgarian : w.english));
        return {
          type: "mc",
          id: word.id,
          icon: word.icon || "🃏",
          prompt,
          hint: direction === "en-bg" ? "What does this mean?" : "How do you say this in English?",
          correct: correctAnswer,
          options: shuffle([correctAnswer, ...distractors]),
          speakText: word.english,
        };
      });
    }

    function buildGapFillQuestions(items, kind) {
      return items.map((item) => {
        if (kind === "toBe") {
          return {
            type: "mc",
            id: item.id,
            icon: item.icon || "⚡",
            prompt: item.sentence,
            hint: item.bulgarian,
            correct: item.verb,
            options: shuffle(["am", "is", "are"]),
            speakText: item.sentence.replace("___", item.verb),
          };
        }
        if (kind === "present") {
          return {
            type: "mc",
            id: item.id,
            icon: item.icon || "🗣️",
            prompt: item.sentence,
            hint: item.bulgarian,
            correct: item.correct,
            options: shuffle(item.options),
            speakText: item.sentence.replace("___", item.correct),
          };
        }
        // kind === "past"
        const distractors = shuffle(verbs.filter((v) => v.id !== item.id))
          .slice(0, 3)
          .map((v) => v.past);
        return {
          type: "mc",
          id: item.id,
          icon: item.icon || "⏳",
          prompt: item.context,
          hint: `${item.base} → ${item.bulgarian}`,
          correct: item.past,
          options: shuffle([item.past, ...distractors]),
          speakText: item.context.replace("___", item.past),
        };
      });
    }

    function buildOrderQuestions(items) {
      return items.map((item) => ({
        type: "order",
        id: item.id,
        words: item.words,
        translation: item.translation,
        speakText: item.words.join(" "),
      }));
    }

    /* ---- shared chrome --------------------------------------------------- */

    function renderProgressHeader() {
      const header = document.createElement("div");
      header.className = "game-header";
      header.innerHTML = `
        <button class="icon-btn" id="fm-exit" aria-label="Exit game">✕</button>
        <div class="game-progress-track"><div class="game-progress-fill" id="fm-progress"></div></div>
        <span class="game-progress-label" id="fm-progress-label">1 / ${questions.length}</span>`;
      container.appendChild(header);
      document.getElementById("fm-exit").addEventListener("click", () => GameSession.close());

      const stage = document.createElement("div");
      stage.className = "game-stage";
      stage.id = "fm-stage";
      container.appendChild(stage);
    }

    function updateProgressBar() {
      const pct = Math.round((index / questions.length) * 100);
      const fill = document.getElementById("fm-progress");
      const label = document.getElementById("fm-progress-label");
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
      if (q.type === "mc") renderMcQuestion(q);
      else renderOrderQuestion(q);
    }

    function advance() {
      setTimeout(() => {
        index += 1;
        renderQuestion();
      }, 900);
    }

    /* ---- multiple-choice question (vocab / toBe / present / past) --------- */

    function renderMcQuestion(q) {
      const stage = document.getElementById("fm-stage");
      const parts = q.prompt.includes("___") ? q.prompt.split("___") : null;
      const promptHtml = parts ? `${parts[0]}<span class="tb-blank">___</span>${parts[1]}` : q.prompt;

      stage.innerHTML = `
        <div class="flashcard" role="group" aria-label="Question">
          <div class="flashcard-icon">${q.icon}</div>
          <div class="flashcard-prompt">${promptHtml}</div>
          <div class="flashcard-hint">${q.hint}</div>
        </div>
        <div class="options-grid" id="fm-options"></div>
      `;

      const optionsGrid = document.getElementById("fm-options");
      q.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.type = "button";
        btn.textContent = opt;
        btn.addEventListener("click", () => handleMcAnswer(btn, opt, q));
        optionsGrid.appendChild(btn);
      });
    }

    function handleMcAnswer(button, chosen, q) {
      const allButtons = document.querySelectorAll("#fm-options .option-btn");
      allButtons.forEach((b) => (b.disabled = true));

      const isCorrect = chosen === q.correct;
      button.classList.add(isCorrect ? "correct" : "wrong");
      revealPronunciation(document.querySelector("#fm-stage .flashcard"), q.speakText);

      if (!isCorrect) {
        allButtons.forEach((b) => {
          if (b.textContent === q.correct) b.classList.add("correct");
        });
        document.getElementById("fm-stage").classList.add("shake");
        setTimeout(() => document.getElementById("fm-stage").classList.remove("shake"), 400);
      }

      GameSession.checkAnswer(q.id, isCorrect);
      advance();
    }

    /* ---- word-order question (sentence building) -------------------------- */

    function renderOrderQuestion(q) {
      let bank = shuffle(q.words.map((word, i) => ({ word, uid: `${q.id}-${i}`, used: false })));
      let answer = [];

      const stage = document.getElementById("fm-stage");
      stage.innerHTML = `
        <div class="flashcard" role="group" aria-label="Sentence builder question">
          <div class="flashcard-icon">🧩</div>
          <div class="sentence-translation-hint">${q.translation}</div>
        </div>
        <div class="answer-strip" id="fm-answer" aria-label="Your sentence"></div>
        <div class="word-bank" id="fm-bank"></div>
        <div class="sentence-builder-actions">
          <button class="btn btn-secondary" id="fm-clear" type="button">Clear</button>
          <button class="btn btn-primary" id="fm-check" type="button" disabled>Check</button>
        </div>
      `;

      document.getElementById("fm-clear").addEventListener("click", () => {
        answer = [];
        bank.forEach((b) => (b.used = false));
        renderBankAndAnswer();
      });
      document.getElementById("fm-check").addEventListener("click", () => handleOrderCheck());

      renderBankAndAnswer();

      function renderBankAndAnswer() {
        const bankEl = document.getElementById("fm-bank");
        const answerEl = document.getElementById("fm-answer");
        const checkBtn = document.getElementById("fm-check");
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
            item.used = false;
            answer = answer.filter((u) => u !== uid);
            renderBankAndAnswer();
          });
          answerEl.appendChild(chip);
        });

        checkBtn.disabled = answer.length !== bank.length;
      }

      function handleOrderCheck() {
        const builtSentence = answer.map((uid) => bank.find((b) => b.uid === uid).word);
        const isCorrect = builtSentence.join(" ") === q.words.join(" ");

        document.getElementById("fm-answer").classList.add(isCorrect ? "correct" : "wrong");
        revealPronunciation(document.querySelector("#fm-stage .flashcard"), q.speakText);
        document.querySelectorAll("#fm-bank .word-chip, #fm-answer .word-chip").forEach((c) => (c.disabled = true));
        document.getElementById("fm-check").disabled = true;
        document.getElementById("fm-clear").disabled = true;

        if (!isCorrect) {
          document.getElementById("fm-stage").classList.add("shake");
          setTimeout(() => document.getElementById("fm-stage").classList.remove("shake"), 400);
        }

        GameSession.checkAnswer(q.id, isCorrect);
        setTimeout(() => {
          index += 1;
          renderQuestion();
        }, 1300);
      }
    }
  },
};
