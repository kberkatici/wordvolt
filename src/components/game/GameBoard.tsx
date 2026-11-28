"use client";

import { useEffect, useRef, useState } from "react";
import { GAME_CONFIG } from "@/config/game";
import type { Question } from "@/types/question";
import { buildOptions, pickQuestion } from "@/lib/game";
import { CheckIcon, CloseIcon } from "../icons";
import { OptionButton } from "./OptionButton";

type Round = { question: Question; options: string[] };

type Props = {
  onAnswer: (correct: boolean) => void;
  onFeedbackDone: () => void;
};

function newRound(excludeId?: string): Round {
  const question = pickQuestion(excludeId);
  return { question, options: buildOptions(question) };
}

export function GameBoard({ onAnswer, onFeedbackDone }: Props) {
  const [round, setRound] = useState<Round | null>(null);
  const [picked, setPicked] = useState<string | null>(null);

  // Üst bileşen her yeniden çizildiğinde zamanlayıcının sıfırlanmaması için
  // en güncel fonksiyonu bir "ref" içinde tutuyoruz.
  const doneRef = useRef(onFeedbackDone);
  useEffect(() => {
    doneRef.current = onFeedbackDone;
  });

  useEffect(() => {
    setRound(newRound());
  }, []);

  useEffect(() => {
    if (picked === null || !round) return;
    const delay =
      picked === round.question.word
        ? GAME_CONFIG.round.feedbackCorrectMs
        : GAME_CONFIG.round.feedbackWrongMs;
    const id = setTimeout(() => {
      doneRef.current();
      setRound((prev) => newRound(prev?.question.id));
      setPicked(null);
    }, delay);
    return () => clearTimeout(id);
  }, [picked, round]);

  if (!round) return <div className="min-h-[520px]" aria-busy="true" />;

  const { question, options } = round;
  const answered = picked !== null;
  const isCorrect = picked === question.word;

  function stateOf(option: string) {
    if (!answered) return "idle";
    if (option === question.word) return "correct";
    if (option === picked) return "wrong";
    return "idle";
  }

  function handlePick(option: string) {
    if (answered) return;
    setPicked(option);
    onAnswer(option === question.word);
  }

  return (
    <>
      <section className="flex flex-col items-center gap-1 rounded-[28px] border-2 border-line-soft bg-white p-5">
        <p className="text-base font-bold text-body">İngilizcesi hangisi?</p>
        {question.media.emoji && (
          <p aria-hidden="true" className="text-[96px] leading-[1.1]">
            {question.media.emoji}
          </p>
        )}
        <p className="text-[44px] font-black leading-[1.1]">{question.tr}</p>
      </section>

      <p
        role="status"
        className={`flex h-6 items-center justify-center gap-1.5 text-[17px] font-extrabold ${
          isCorrect ? "text-correct" : "text-wrong"
        }`}
      >
        {answered && isCorrect && (
          <>
            <CheckIcon />
            Doğru!
          </>
        )}
        {answered && !isCorrect && (
          <>
            <CloseIcon />
            Doğrusu: {question.word}
          </>
        )}
      </p>

      <div className="flex flex-col gap-2.5">
        {options.map((option) => (
          <OptionButton
            key={option}
            word={option}
            state={stateOf(option)}
            disabled={answered}
            onClick={() => handlePick(option)}
          />
        ))}
      </div>
    </>
  );
}