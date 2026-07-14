import type { SVGProps } from "react";

type IconName =
  | "shield"
  | "check"
  | "age"
  | "lock"
  | "star"
  | "arrow"
  | "gift"
  | "spin"
  | "coin"
  | "refresh"
  | "clock"
  | "wallet"
  | "game"
  | "menu"
  | "close"
  | "chevron"
  | "phone"
  | "mail"
  | "trophy"
  | "sparkle"
  | "scales";

const paths: Record<IconName, React.ReactNode> = {
  shield: <path d="M12 3 4 6v6c0 5 3.4 7.7 8 9 4.6-1.3 8-4 8-9V6l-8-3Z" />,
  check: <path d="M20 6 9 17l-5-5" />,
  age: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 9.5a1.5 1.5 0 0 1 3 0c0 1.5-3 2-3 4.5h3M15 8.5v7" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  star: (
    <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9L12 3Z" />
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  gift: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M4 13h16M12 9v11M12 9S9.5 4 7 6s2.5 3 5 3Zm0 0s2.5-5 5-3-2.5 3-5 3Z" />
    </>
  ),
  spin: <path d="M21 12a9 9 0 1 1-3-6.7M21 4v4h-4" />,
  coin: (
    <>
      <ellipse cx="12" cy="7" rx="7" ry="3" />
      <path d="M5 7v6c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 13c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  refresh: <path d="M21 12a9 9 0 1 1-2.6-6.4M21 4v5h-5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18M16 14h2" />
    </>
  ),
  game: (
    <>
      <rect x="2" y="7" width="20" height="10" rx="5" />
      <path d="M7 11v3M5.5 12.5h3M15 12h.01M18 14h.01" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 20h6M12 13v4" />
    </>
  ),
  sparkle: <path d="M12 3v6m0 6v6m9-9h-6m-6 0H3m13.5-4.5-3 3m-3 3-3 3m0-9 3 3m3 3 3 3" />,
  scales: (
    <>
      <path d="M12 4v16M6 20h12M4 8h16" />
      <path d="M8 4 4 8l4 4 4-4-4-4ZM16 4l-4 4 4 4 4-4-4-4Z" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={name === "star" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
