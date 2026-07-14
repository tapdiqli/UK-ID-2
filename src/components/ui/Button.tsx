import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineOnDark"
  | "ghost"
  | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-forest-500 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-600 text-white hover:bg-forest-700 shadow-[0_10px_25px_-12px_rgba(27,94,32,0.8)] hover:-translate-y-0.5",
  secondary:
    "bg-forest-400 text-forest-900 hover:bg-forest-300 hover:-translate-y-0.5",
  outline:
    "border-2 border-forest-600 text-forest-700 hover:bg-forest-600 hover:text-white",
  /** Outline for dark/green backgrounds — white border & text, dark text on hover */
  outlineOnDark:
    "border-2 border-white/40 bg-transparent text-white hover:bg-white hover:text-forest-800",
  ghost: "text-forest-700 hover:bg-forest-50",
  light:
    "bg-white text-forest-800 hover:bg-forest-50 shadow-[0_10px_25px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, "className"> & { href: string };

export function LinkButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: LinkButtonProps) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
}
