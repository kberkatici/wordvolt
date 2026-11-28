import { DailyPlays } from "@/components/DailyPlays";
import { SpeakerIcon } from "@/components/icons";
import { GameBoard } from "@/components/game/GameBoard";
import { Lives } from "@/components/game/Lives";

export default function GamePage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-3.5 px-5 py-5">
      <header className="flex h-11 items-center gap-2.5">
        <Lives remaining={2} total={3} />
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

      <GameBoard />

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