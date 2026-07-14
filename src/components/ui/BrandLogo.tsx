import Image from "next/image";
import type { Brand } from "@/lib/types";

interface BrandLogoProps {
  brand: Pick<
    Brand,
    "name" | "logoInitials" | "logoImage" | "accentFrom" | "accentTo"
  >;
  size?: number;
  rounded?: string;
  className?: string;
}

export function BrandLogo({
  brand,
  size = 56,
  rounded = "rounded-2xl",
  className = "",
}: BrandLogoProps) {
  if (brand.logoImage) {
    return (
      <div
        className={`relative flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden bg-white ${rounded} ring-1 ring-ink/10 ${className}`}
      >
        <Image
          src={brand.logoImage}
          alt={`${brand.name} logo`}
          width={160}
          height={80}
          className="h-full w-full object-contain p-1.5"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center ${rounded} font-display font-bold text-white shadow-inner ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        background: `linear-gradient(135deg, ${brand.accentFrom}, ${brand.accentTo})`,
      }}
      role="img"
      aria-label={`${brand.name} logo`}
    >
      <span className="drop-shadow-sm">{brand.logoInitials}</span>
      <span
        className={`pointer-events-none absolute inset-0 ${rounded} ring-1 ring-inset ring-white/25`}
      />
    </div>
  );
}
