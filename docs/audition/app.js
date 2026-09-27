(() => {
  "use strict";

  const data = window.AUDITION_DATA;
  const questionsRoot = document.querySelector("#questions");
  const title = document.querySelector("#quiz-title");
  const progress = document.querySelector("#progress");
  const progressFill = document.querySelector("#progress-fill");
  const submitButton = document.querySelector("#submit-button");
  const resetButton = document.querySelector("#reset-button");
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

  document.title = data.title;
  title.textContent = data.title;

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
    const scoredRows = [];
    const componentRows = {
      initial_front_back: [],
      translation_range: [],
      final_side: [],
    };
    cards.forEach((card, questionIndex) => {
      const question = data.questions[questionIndex];
      const chosen = selectedIndex(card);
      const isCorrect = chosen === question.answerIndex;
      scoredRows.push({ question, isCorrect });
      const chosenComponents = (question.optionComponents || [])[chosen] || {};
      Object.entries(question.answerComponents || {}).forEach(([name, answer]) => {
        if (componentRows[name]) {
          componentRows[name].push(chosenComponents[name] === answer);
        }
      });
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

    const summary = (rows) => {
      const correct = rows.filter((row) => row.isCorrect).length;
      const percentage = rows.length ? Math.round((correct / rows.length) * 100) : 0;
      return `${correct}/${rows.length} (${percentage}%)`;
    };
    const coreRows = scoredRows.filter(
      (row) => row.question.includeInCoreScore);
    const roleGroups = new Map();
    scoredRows.forEach((row) => {
      const key = row.question.scoreRole || "diagnostic";
      if (!roleGroups.has(key)) roleGroups.set(key, []);
      roleGroups.get(key).push(row);
    });
    const roleLines = Array.from(roleGroups.entries())
      .filter(([role]) => role !== "core")
      .map(([, rows]) => {
      const label = rows[0].question.scoreRoleLabel || rows[0].question.scoreRole;
      return `<span>${escapeHtml(label)}: ${summary(rows)}</span>`;
    }).join("");
    const componentLines = Object.entries(componentRows)
      .filter(([, values]) => values.length)
      .map(([name, values]) => {
        const correct = values.filter(Boolean).length;
        const label = name.replaceAll("_", " ");
        return `<span>T3 ${escapeHtml(label)}: ${correct}/${values.length}</span>`;
      }).join("");
    const coreLine = coreRows.length
      ? `Core audio-grounded score: ${summary(coreRows)}`
      : "Core audio-grounded score: no validated core item in this demo";
    result.innerHTML = `
      <strong>${coreLine}</strong>
      ${roleLines}
      ${componentLines}
      <small>Demo results are grouped by reporting role. Baselines, diagnostics,
        text reasoning and guided prompts are excluded from the core score.</small>`;
    result.hidden = false;
    phaseStep.textContent = "Results";
    phaseTitle.textContent = "Answer review";
    phaseDescription.textContent = (
      "Correctness was revealed only after both stages were completed."
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
    submitButton.textContent = "Continue to guided questions";
    resetButton.hidden = true;
    phaseStep.textContent = "Stage 1 of 2";
    phaseTitle.textContent = "Unguided listening test";
    phaseDescription.textContent = (
      "Complete these questions without a reasoning hint. Your answers will be " +
      "locked before the guided comparison begins."
    );
    updateProgress();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  submitButton.textContent = "Continue to guided questions";
  updateProgress();
})();
