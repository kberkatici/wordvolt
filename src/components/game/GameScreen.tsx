"use client";

import { useEffect, useState } from "react";
import { GAME_CONFIG } from "@/config/game";
import { DailyPlays } from "@/components/DailyPlays";
import { SpeakerIcon } from "@/components/icons";
import { GameBoard } from "./GameBoard";
import { Lives } from "./Lives";

type EndReason = "time" | "lives" | null;

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function GameScreen() {
  const {
    lives: totalLives,
    durationSeconds,
    lowTimeSeconds,
  } = GAME_CONFIG.round;

  const [lives, setLives] = useState<number>(totalLives);
  const [timeLeft, setTimeLeft] = useState<number>(durationSeconds);
  const [endAt, setEndAt] = useState<number | null>(null);
  const [endReason, setEndReason] = useState<EndReason>(null);
  const ended = endReason !== null;
  const lowTime = timeLeft <= lowTimeSeconds;

  // Sayacı sayfa açılınca başlat
  useEffect(() => {
    setEndAt(Date.now() + durationSeconds * 1000);
  }, [durationSeconds]);

  // Bitiş saatine göre kalan süreyi hesapla
  useEffect(() => {
    if (endAt === null || ended) return;
    const id = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining === 0) setEndReason("time");
    }, 250);
    return () => clearInterval(id);
  }, [endAt, ended]);

  function handleAnswer(correct: boolean) {
    if (!correct) setLives((l) => Math.max(0, l - 1));
  }

  function handleFeedbackDone() {
    if (lives <= 0) setEndReason("lives");
  }

  function restart() {
    setLives(totalLives);
    setTimeLeft(durationSeconds);
    setEndAt(Date.now() + durationSeconds * 1000);
    setEndReason(null);
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
          aria-valuemax={durationSeconds}
          aria-valuenow={timeLeft}
          className="h-3.5 flex-1 overflow-hidden rounded-full bg-track"
        >
          <div
            className={`h-full rounded-full transition-[width] duration-1000 ease-linear ${
              lowTime ? "bg-wrong" : "bg-brand"
            }`}
            style={{ width: `${(timeLeft / durationSeconds) * 100}%` }}
          />
        </div>
        <p
          className={`min-w-[44px] text-right text-base font-extrabold tabular-nums ${
            lowTime ? "text-wrong" : "text-ink"
          }`}
        >
          {formatTime(timeLeft)}
        </p>
      </div>

      <div className="flex justify-center">
        <p className="rounded-full bg-volt px-4 py-1.5 text-base font-black text-volt-ink">
          Kombo ×3
        </p>
      </div>

      {ended ? (
        <section className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <p className="text-3xl font-black">
            {endReason === "time" ? "Süre doldu!" : "Canların bitti!"}
          </p>
          <p className="text-base font-semibold text-body">
            Geçici ekran: asıl tur sonu ekranı Gün 21&apos;de gelecek.
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