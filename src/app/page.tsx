import { GAME_CONFIG } from "@/config/game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-5xl font-black text-brand">WordVolt</h1>
      <p className="text-lg font-semibold text-body">Spark Your Vocabulary.</p>
      <p className="rounded-full bg-volt px-4 py-1 font-black text-volt-ink">
        Kombo ×3
      </p>
      <p className="text-xl font-extrabold">şğıİöüç ŞĞİÖÜÇ</p>
      <p className="text-sm text-muted">
        Tur süresi: {GAME_CONFIG.round.durationSeconds} sn
      </p>
    </main>
  );
}