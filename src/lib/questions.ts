import raw from "@/data/questions.json";
import type { Level } from "@/config/game";
import type { Question } from "@/types/question";

export const QUESTIONS = raw as Question[];

export function questionsByLevel(level: Level): Question[] {
  return QUESTIONS.filter((q) => q.level === level);
}