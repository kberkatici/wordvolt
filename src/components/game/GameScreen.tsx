"use client";

import { useState } from "react";
import { GAME_CONFIG } from "@/config/game";
import { DailyPlays } from "@/components/DailyPlays";
import { SpeakerIcon } from "@/components/icons";
import { GameBoard } from "./GameBoard";
import { Lives } from "./Lives";

export function GameScreen() {
  const totalLives = GAME_CONFIG.round.lives;
  const [lives, setLives] = useState<number>(totalLives);
  const [ended, setEnded] = useState(false);

  function handleAnswer(correct: boolean) {
    if (!correct) setLives((l) => Math.max(0, l - 1));
  }

  function handleFeedbackDone() {
    if (lives <= 0) setEnded(true);
  }

  function restart() {
    setLives(totalLives);
    setEnded(false);
  }

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-3.5 px-5 py-5">
      <header className="flex h-11 items-center gap-2.5">
        <Lives remaining={lives} total={totalLives} />
        <div className="ml-auto rounded-full bg-brand px-3 py-1.5 text-base font-extrabold text-white">
          A2
        </div>
        <p className="min-w-[70px] text-right text-[26px] font-black">1.240</p>
      </header>

      <div className="flex items-center gap-2.5">
        <div
          role="progressbar"
          aria-label="Kalan süre"
          aria-valuemin={0}
          aria-valuemax={90}
          aria-valuenow={56}
          className="h-3.5 flex-1 overflow-hidden rounded-full bg-track"
        >
          <div className="h-full rounded-full bg-brand" style={{ width: "62%" }} />
        </div>
        <p className="text-base font-extrabold">0:56</p>
      </div>

      <div className="flex justify-center">
        <p className="rounded-full bg-volt px-4 py-1.5 text-base font-black text-volt-ink">
          Kombo ×3
        </p>
      </div>

      {ended ? (
        <section className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <p className="text-3xl font-black">Tur bitti!</p>
          <p className="text-base font-semibold text-body">
            Canların bitti. (Geçici ekran: asıl tur sonu ekranı Gün 21&apos;de gelecek.)
          </p>
          <button
            type="button"
            onClick={restart}
            className="h-[60px] w-full rounded-[20px] bg-brand text-[22px] font-black text-white"
          >
            Tekrar oyna
          </button>
        </section>
      ) : (
        <GameBoard onAnswer={handleAnswer} onFeedbackDone={handleFeedbackDone} />
      )}

      <footer className="mt-auto flex h-11 items-center gap-2.5">
        <DailyPlays remaining={2} total={3} label="Günlük hak" />
        <button
          type="button"
          aria-label="Sesi kapat"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-line bg-white text-ink"
        >
          <SpeakerIcon />
        </button>
      </footer>
    </main>
  );
}