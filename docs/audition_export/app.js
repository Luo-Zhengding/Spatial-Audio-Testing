(() => {
  "use strict";

  const data = window.AUDITION_DATA;
  const questionsRoot = document.querySelector("#questions");
  const title = document.querySelector("#quiz-title");
  const progress = document.querySelector("#progress");
  const progressFill = document.querySelector("#progress-fill");
  const submitButton = document.querySelector("#submit-button");
  const resetButton = document.querySelector("#reset-button");
  const downloadButton = document.querySelector("#download-button");
  const result = document.querySelector("#result");
  const error = document.querySelector("#error");
  const phaseStep = document.querySelector("#phase-step");
  const phaseTitle = document.querySelector("#phase-title");
  const phaseDescription = document.querySelector("#phase-description");
  let phase = "unguided";

  if (!data || !Array.isArray(data.questions)) {
    error.textContent = "Quiz data could not be loaded.";
    error.hidden = false;
    submitButton.disabled = true;
    return;
  }

  // Present the example from simple judgments to multi-stage reasoning.
  // Stable sorting preserves the generated random order within each task.
  // Keep IDs intact so audio, answers and private keys retain their mapping.
  const taskOrder = [
    "T1_loudness", "T1", "T1_distance", "T2_translation",
    "T2_turn_inference", "T2_fb", "T3", "T2_fb_guided",
  ];
  const taskRank = (question) => {
    if (question.promptCondition === "guided" || question.type === "T2_fb_guided") {
      return taskOrder.length;
    }
    const rank = taskOrder.indexOf(question.type);
    return rank < 0 ? taskOrder.length - 1 : rank;
  };
  data.questions.sort((a, b) => taskRank(a) - taskRank(b));

  document.title = data.title;
  title.textContent = data.title;
  const hasGuided = data.questions.some((q) => q.promptCondition === "guided");
  let responseFile = "";
  if (data.blind) {
    document.querySelector(".intro").textContent = "Listen and answer every question. After submission, download your responses for evaluation.";
    document.querySelector(".demo-notice").textContent = "Answers are not included in this listening test. No score or correctness feedback is shown.";
  }

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const cards = data.questions.map((question, questionIndex) => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.id = question.id;
    card.dataset.questionIndex = String(questionIndex);
    card.dataset.phase = question.promptCondition === "guided"
      ? "guided"
      : "unguided";
    card.dataset.scoreRole = question.scoreRole || "diagnostic";
    card.hidden = card.dataset.phase === "guided";

    const audioPlayers = question.audio.map((source, clipIndex) => {
      const label = question.audio.length === 1
        ? "Recording"
        : `Recording ${String.fromCharCode(65 + clipIndex)}`;
      return `
        <div class="audio-row">
          <span>${label}</span>
          <audio controls preload="metadata" src="${escapeHtml(source)}"></audio>
        </div>`;
    }).join("");

    const options = question.options.map((option, optionIndex) => `
      <label class="option">
        <input type="radio" name="${escapeHtml(question.id)}" value="${optionIndex}">
        <span>${escapeHtml(option)}</span>
      </label>`).join("");

    const timeline = (question.timeline || []).length
      ? `<div class="timeline" aria-label="Motion timeline">
          ${question.timeline.map((stage) => {
            const duration = Math.max(0.1, Number(stage.end) - Number(stage.start));
            return `
              <div class="timeline-stage timeline-stage--${escapeHtml(stage.kind)}"
                   style="--duration: ${duration}">
                <span>${Number(stage.start).toFixed(1)}–${Number(stage.end).toFixed(1)} s</span>
                <strong>${escapeHtml(stage.label)}</strong>
              </div>`;
          }).join("")}
        </div>`
      : "";

    const reasoningHint = question.reasoningHint
      ? `<div class="reasoning-hint">
          <strong>Reasoning hint</strong>
          <span>${escapeHtml(question.reasoningHint)}</span>
        </div>`
      : "";

    card.innerHTML = `
      <div class="question-meta">
        <span>Question ${questionIndex + 1}</span>
        <span class="type-badge">${escapeHtml(question.type)} ·
          ${escapeHtml(question.scoreRoleLabel || question.scoreRole || "Diagnostic")}
        </span>
      </div>
      <h2>${escapeHtml(question.question)}</h2>
      ${reasoningHint}
      ${timeline}
      <div class="audio-list">${audioPlayers}</div>
      <fieldset>
        <legend class="sr-only">Choose one answer</legend>
        <div class="options">${options}</div>
      </fieldset>
      <div class="feedback" aria-live="polite" hidden></div>`;
    questionsRoot.appendChild(card);
    return card;
  });

  function selectedIndex(card) {
    const selected = card.querySelector('input[type="radio"]:checked');
    return selected ? Number(selected.value) : null;
  }

  function activeCards() {
    if (phase === "submitted") return cards;
    return cards.filter((card) => card.dataset.phase === phase);
  }

  function updateProgress() {
    const active = activeCards();
    const answered = active.filter((card) => selectedIndex(card) !== null).length;
    progress.textContent = `${answered} of ${active.length} answered`;
    progressFill.style.width = active.length
      ? `${(answered / active.length) * 100}%`
      : "0%";
    error.hidden = true;
  }

  function stopOtherAudio(event) {
    if (event.target.tagName !== "AUDIO") return;
    document.querySelectorAll("audio").forEach((player) => {
      if (player !== event.target) player.pause();
    });
  }

  questionsRoot.addEventListener("change", updateProgress);
  questionsRoot.addEventListener("play", stopOtherAudio, true);

  submitButton.addEventListener("click", () => {
    if (phase === "submitted") return;
    const active = activeCards();
    const firstMissing = active.find((card) => selectedIndex(card) === null);
    if (firstMissing) {
      error.textContent = "Please answer every question before submitting.";
      error.hidden = false;
      firstMissing.scrollIntoView({ behavior: "smooth", block: "center" });
      firstMissing.classList.add("question-card--missing");
      window.setTimeout(
        () => firstMissing.classList.remove("question-card--missing"), 1200);
      return;
    }

    const guidedCards = cards.filter((card) => card.dataset.phase === "guided");
    if (phase === "unguided" && guidedCards.length) {
      active.forEach((card) => {
        card.querySelectorAll('input[type="radio"]').forEach((input) => {
          input.disabled = true;
        });
        card.hidden = true;
      });
      cards
        .filter((card) => card.dataset.phase === "guided")
        .forEach((card) => { card.hidden = false; });
      phase = "guided";
      phaseStep.textContent = "Stage 2 of 2";
      phaseTitle.textContent = "Guided comparison";
      phaseDescription.textContent = (
        "Now answer the paired front/back questions with a reasoning hint. " +
        "Your Stage 1 answers are locked, and no correctness feedback has been shown."
      );
      submitButton.textContent = "Submit guided answers";
      updateProgress();
      phaseTitle.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    phase = "submitted";
    const answers = Object.fromEntries(cards.map((card, i) => [data.questions[i].id, selectedIndex(card)]));
    if (data.blind) {
      responseFile = data.questions.map((q) => JSON.stringify({ id: q.id, answer_index: answers[q.id] })).join("\n") + "\n";
      cards.forEach((card) => card.querySelectorAll('input[type="radio"]').forEach((input) => { input.disabled = true; }));
      result.textContent = "Responses saved in this page. Download them before closing it and return the file to the evaluator.";
      result.hidden = false;
      downloadButton.hidden = false;
      submitButton.hidden = true;
      phaseStep.textContent = "Completed";
      phaseTitle.textContent = "Download your responses";
      phaseDescription.textContent = "No answers or scores have been revealed.";
      updateProgress();
      return;
    }
    const scores = window.AudioWorldScoring.summarize(data.questions, answers);
    cards.forEach((card, questionIndex) => {
      const question = data.questions[questionIndex];
      const chosen = selectedIndex(card);
      const isCorrect = scores.rows[questionIndex].isCorrect;
      card.hidden = false;
      card.classList.add(isCorrect
        ? "question-card--correct"
        : "question-card--incorrect");
      card.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.disabled = true;
      });
      const feedback = card.querySelector(".feedback");
      feedback.hidden = false;
      feedback.innerHTML = isCorrect
        ? `<strong>Correct.</strong> ${escapeHtml(question.options[question.answerIndex])}`
        : `<strong>Incorrect.</strong> Your answer: ${escapeHtml(question.options[chosen])}<br>
           Correct answer: ${escapeHtml(question.options[question.answerIndex])}`;
    });

    const summary = (value) => `${value.correct}/${value.total} (${Math.round((value.accuracy || 0) * 100)}%)`;
    const roleLines = Object.entries(scores.byRole)
      .filter(([role]) => role !== "core")
      .map(([role, value]) => {
      const question = scores.rows.find((row) => row.role === role).question;
      return `<span>${escapeHtml(question.scoreRoleLabel || role)}: ${summary(value)}</span>`;
    }).join("");
    const componentLines = Object.entries(scores.components)
      .filter(([, value]) => value.total)
      .map(([name, value]) => {
        const label = name.replaceAll("_", " ");
        return `<span>T3 ${escapeHtml(label)}: ${summary(value)}</span>`;
      }).join("");
    const coreLine = scores.core.total
      ? `Core audio-grounded score: ${summary(scores.core)}`
      : "Core audio-grounded score: no validated core item in this demo";
    const exactLine = scores.t3ExactMatch.total ? `<span>T3 exact match: ${summary(scores.t3ExactMatch)}</span>` : "";
    const pairLine = scores.pairs.complete ? `<span>Matched prompt pairs (${scores.pairs.complete}): unguided ${summary(scores.pairs.unguided)}; guided ${summary(scores.pairs.guided)}; difference ${(scores.pairs.delta * 100).toFixed(1)} percentage points.</span>` : "";
    const incompleteLine = scores.pairs.incomplete ? `<span>${scores.pairs.incomplete} item(s) have no prompt partner and are excluded from the paired comparison.</span>` : "";
    result.innerHTML = `
      <strong>${coreLine}</strong>
      ${roleLines}
      ${componentLines}
      ${exactLine}
      ${pairLine}
      ${incompleteLine}
      <small>Demo results are grouped by reporting role. Baselines, diagnostics,
        text reasoning and guided prompts are excluded from the core score.</small>`;
    result.hidden = false;
    phaseStep.textContent = "Results";
    phaseTitle.textContent = "Answer review";
    phaseDescription.textContent = (
      "Correctness was revealed only after all questions were completed."
    );
    submitButton.hidden = true;
    resetButton.hidden = false;
    updateProgress();
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  resetButton.addEventListener("click", () => {
    phase = "unguided";
    cards.forEach((card) => {
      card.classList.remove(
        "question-card--correct", "question-card--incorrect");
      card.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.checked = false;
        input.disabled = false;
      });
      card.querySelector(".feedback").hidden = true;
      card.hidden = card.dataset.phase === "guided";
    });
    result.hidden = true;
    submitButton.hidden = false;
    submitButton.textContent = hasGuided ? "Continue to guided questions" : "Submit answers";
    resetButton.hidden = true;
    phaseStep.textContent = hasGuided ? "Stage 1 of 2" : "Listening test";
    phaseTitle.textContent = "Unguided listening test";
    phaseDescription.textContent = (
      "Complete these questions without a reasoning hint. Your answers will be " +
      "locked before the guided comparison begins."
    );
    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  downloadButton.addEventListener("click", () => {
    const url = URL.createObjectURL(new Blob([responseFile], { type: "application/x-ndjson" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "responses.jsonl";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  submitButton.textContent = hasGuided ? "Continue to guided questions" : "Submit answers";
  if (!hasGuided) {
    phaseStep.textContent = "Listening test";
    phaseDescription.textContent = "Listen to the recordings and answer every question before submitting.";
  }
  updateProgress();
})();
