import { CheckIcon, CloseIcon } from "../icons";

type State = "idle" | "correct" | "wrong";

type Props = {
  word: string;
  state?: State;
  disabled?: boolean;
  onClick?: () => void;
};

const STYLES: Record<State, string> = {
  idle: "border-line bg-white text-ink",
  correct: "border-correct bg-correct text-white",
  wrong: "border-wrong bg-wrong text-white",
};

export function OptionButton({
  word,
  state = "idle",
  disabled,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex h-[58px] w-full items-center justify-center gap-2 rounded-[20px] border-2 text-[22px] font-extrabold ${STYLES[state]}`}
    >
      {state === "correct" && <CheckIcon size={24} />}
      {state === "wrong" && <CloseIcon size={24} />}
      {word}
    </button>
  );
}