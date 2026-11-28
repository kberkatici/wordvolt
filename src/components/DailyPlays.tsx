import { StarIcon } from "./icons";

type Props = { remaining: number; total: number; label?: string };

export function DailyPlays({ remaining, total, label }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div
        role="img"
        aria-label={`Günlük ${total} haktan ${remaining} tanesi kaldı`}
        className="flex gap-0.5"
      >
        {Array.from({ length: total }, (_, i) => (
          <StarIcon
            key={i}
            className={i < remaining ? "text-volt" : "text-track"}
          />
        ))}
      </div>
      <p className="text-base font-bold text-body">
        {label ?? `Bugün ${remaining} hakkın var`}
      </p>
    </div>
  );
}