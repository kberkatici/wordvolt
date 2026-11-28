import { CheckIcon } from "../icons";

type Props = { word: string; state?: "idle" | "correct" };

export function OptionButton({ word, state = "idle" }: Props) {
  const styles =
    state === "correct"
      ? "border-correct bg-correct text-white"
      : "border-line bg-white text-ink";

  return (
    <button
      type="button"
      className={`flex h-[58px] w-full items-center justify-center gap-2 rounded-[20px] border-2 text-[22px] font-extrabold ${styles}`}
    >
      {state === "correct" && <CheckIcon size={24} />}
      {word}
    </button>
  );
}