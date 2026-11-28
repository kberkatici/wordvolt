import type { Level } from "@/config/game";

export type Question = {
  id: string;
  type: "choice";
  word: string;
  tr: string;
  level: Level;
  skill: "vocabulary";
  topic: string;
  media: { emoji: string | null; image: string | null; audio: string | null };
  distractors: string[];
  source: string;
};