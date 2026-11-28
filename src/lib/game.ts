import { QUESTIONS } from "./questions";
import type { Question } from "@/types/question";

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pickQuestion(excludeId?: string): Question {
  const pool = QUESTIONS.filter((q) => q.id !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)];
}

export function buildOptions(question: Question): string[] {
  return shuffle([question.word, ...question.distractors]);
}