/* Pure scoring shared by the demo UI and simulator-free Node tests. */
((root) => {
  "use strict";
  const metric = (rows) => {
    const correct = rows.filter((row) => row.isCorrect).length;
    return { correct, total: rows.length, accuracy: rows.length ? correct / rows.length : null };
  };
  function summarize(questions, answers) {
    const ids = new Set();
    const units = new Set();
    const byRole = {};
    const byType = {};
    const components = { initial_front_back: [], translation_range: [], final_side: [] };
    const pairs = new Map();
    const rows = questions.map((question) => {
      const unit = `${question.type}:${question.baseItemId || question.id}:${question.promptCondition || "unguided"}`;
      if (ids.has(question.id) || units.has(unit)) throw new Error("Duplicate scoring item");
      ids.add(question.id);
      units.add(unit);
      const chosen = answers[question.id];
      const guided = question.type === "T2_fb_guided" || question.promptCondition === "guided";
      const role = guided ? "prompt_control" : question.scoreRole || "diagnostic";
      let isCorrect = Number.isInteger(chosen) && chosen === question.answerIndex;
      if (question.type === "T3") {
        const parsed = (question.optionComponents || [])[chosen] || {};
        const gold = question.answerComponents || {};
        isCorrect = Object.keys(components).every((field) => gold[field] !== undefined && parsed[field] === gold[field]);
        Object.keys(components).forEach((field) => {
          components[field].push({ isCorrect: gold[field] !== undefined && parsed[field] === gold[field] });
        });
      }
      const row = { question, isCorrect, role, core: question.type === "T2_fb" && !guided && question.includeInCoreScore === true };
      (byRole[role] ||= []).push(row);
      (byType[question.type] ||= []).push(row);
      if (["T2_fb", "T2_fb_guided"].includes(question.type)) {
        const id = question.promptPairId || question.baseItemId || question.id;
        if (!pairs.has(id)) pairs.set(id, {});
        const pair = pairs.get(id);
        const condition = guided ? "guided" : "unguided";
        if (pair[condition]) throw new Error("Duplicate prompt partner");
        pair[condition] = row;
      }
      return row;
    });
    const complete = [...pairs.values()].filter((pair) => pair.guided && pair.unguided);
    const unguided = metric(complete.map((pair) => pair.unguided));
    const guided = metric(complete.map((pair) => pair.guided));
    const summarizeGroups = (groups) => Object.fromEntries(Object.entries(groups).map(([name, values]) => [name, metric(values)]));
    return { rows, core: metric(rows.filter((row) => row.core)),
      byRole: summarizeGroups(byRole), byType: summarizeGroups(byType),
      t3ExactMatch: metric(byType.T3 || []), components: summarizeGroups(components),
      pairs: { complete: complete.length, incomplete: pairs.size - complete.length,
        unguided, guided, delta: complete.length ? guided.accuracy - unguided.accuracy : null } };
  }
  const api = { summarize };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.AudioWorldScoring = api;
})(globalThis);
