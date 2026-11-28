export const GAME_CONFIG = {
    round: {
    durationSeconds: 90,
    lives: 3,
    warmupQuestions: 5,
    feedbackCorrectMs: 1000,
    feedbackWrongMs: 2000,
  },
  difficulty: {
    levelUpAfterCorrect: 3,
    levelDownAfterWrong: 2,
  },
  levels: ["A1", "A2", "B1"],
  levelMultiplier: { A1: 1, A2: 1.5, B1: 2 },
  score: {
    basePoints: 100,
    maxCombo: 5,
    fastAnswerSeconds: 3,
    fastAnswerBonus: 1.2,
  },
  plays: {
    guestDaily: 3,
    memberDaily: 10,
  },
} as const;

export type Level = (typeof GAME_CONFIG.levels)[number];