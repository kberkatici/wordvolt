import { HeartIcon } from "../icons";

type Props = { remaining: number; total: number };

export function Lives({ remaining, total }: Props) {
  return (
    <div
      role="img"
      aria-label={`${total} candan ${remaining} tanesi kaldı`}
      className="flex gap-1"
    >
      {Array.from({ length: total }, (_, i) => (
        <HeartIcon
          key={i}
          className={i < remaining ? "text-wrong" : "text-track"}
        />
      ))}
    </div>
  );
}