import { readFileSync } from "node:fs";

const questions = JSON.parse(
  readFileSync(new URL("../src/data/questions.json", import.meta.url), "utf8")
);

const LEVELS = ["A1", "A2", "B1"];
const problems = [];
const ids = new Set();
const counts = {};

for (const q of questions) {
  if (ids.has(q.id)) problems.push(q.id + ": duplicate id");
  ids.add(q.id);
  if (!LEVELS.includes(q.level)) problems.push(q.id + ": invalid level " + q.level);
  if (q.distractors.length !== 3) problems.push(q.id + ": needs exactly 3 distractors");
  if (q.distractors.includes(q.word)) problems.push(q.id + ": correct word is in distractors");
  if (new Set(q.distractors).size !== q.distractors.length) problems.push(q.id + ": repeated distractor");
  counts[q.level] = (counts[q.level] ?? 0) + 1;
}

console.log("Total questions:", questions.length, counts);
if (problems.length > 0) {
  console.log("Problems:");
  for (const p of problems) console.log(" - " + p);
  process.exit(1);
}
console.log("No problems found.");