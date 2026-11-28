type IconProps = { className?: string; size?: number };

export function StarIcon({ className, size = 26 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export function PlayIcon({ className, size = 30 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function Svg({
  d,
  className,
  size,
}: {
  d: string;
  className?: string;
  size: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
    >
      <path d={d} />
    </svg>
  );
}

export const HeartIcon = ({ className, size = 28 }: IconProps) => (
  <Svg
    className={className}
    size={size}
    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  />
);

export const CheckIcon = ({ className, size = 20 }: IconProps) => (
  <Svg
    className={className}
    size={size}
    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  />
);

export const SpeakerIcon = ({ className, size = 22 }: IconProps) => (
  <Svg
    className={className}
    size={size}
    d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"
  />
);
export const CloseIcon = ({ className, size = 20 }: IconProps) => (
  <Svg
    className={className}
    size={size}
    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  />
);