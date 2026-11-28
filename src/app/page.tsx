import Image from "next/image";
import Link from "next/link";
import { GAME_CONFIG } from "@/config/game";
import { DailyPlays } from "@/components/DailyPlays";
import { PlayIcon } from "@/components/icons";

export default function Home() {
  const dailyPlays = GAME_CONFIG.plays.guestDaily;

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center px-5 py-8 text-center">
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <Image
          src="/mascot/sparky-happy.png"
          alt="Sparky, şimşek kuyruklu sincap"
          width={200}
          height={200}
          priority
          className="h-auto w-48"
        />
        <h1 className="text-5xl font-black text-brand">WordVolt</h1>
        <p className="text-lg font-semibold text-body">
          Kelimeleri yakala, seviyeni yükselt!
        </p>
        <Link
          href="/oyun"
          className="mt-4 flex h-[76px] w-full items-center justify-center gap-2.5 rounded-[28px] bg-brand text-3xl font-black text-white focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          <PlayIcon />
          Oyna
        </Link>
        <DailyPlays remaining={dailyPlays} total={dailyPlays} />
      </div>
      <Link
        href="/giris"
        className="text-base font-bold text-brand underline underline-offset-4"
      >
        Zaten üye misin? Giriş yap
      </Link>
    </main>
  );
}