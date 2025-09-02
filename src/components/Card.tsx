import React from "react";

import Image from "next/image";

type BadgeVariant = "default" | "success" | "danger" | "warning";

interface CardProps {
  title: string;
  subtitle?: string;
  price?: string | number;
  imageSrc: string;
  imageAlt?: string;
  badgeText?: string;
  badgeVariant?: BadgeVariant;
  href?: string;
}

function badgeClasses(variant: BadgeVariant = "default") {
  switch (variant) {
    case "success":
      return "bg-[--color-green] text-[--color-light-100]";
    case "danger":
      return "bg-[--color-red] text-[--color-light-100]";
    case "warning":
      return "bg-[--color-orange] text-[--color-light-100]";
    default:
      return "bg-[--color-light-100]/90 text-[--color-dark-900] border border-[--color-light-300]";
  }
}

export default function Card({
  title,
  subtitle,
  price,
  imageSrc,
  imageAlt = title,
  badgeText,
  badgeVariant = "default",
  href = "#",
}: CardProps) {
  return (
    <a
      href={href}
      className="group block overflow-hidden rounded-xl border border-[--color-light-300] bg-[--color-light-100] shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        {badgeText ? (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[--text-footnote] leading-[--text-footnote--line-height] font-[--text-footnote--font-weight] ${badgeClasses(
              badgeVariant,
            )}`}
          >
            {badgeText}
          </span>
        ) : null}
        <div className="relative aspect-[4/3] w-full bg-[--color-light-200]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 px-4 pb-4 pt-3">
        <div className="min-w-0">
          <h3 className="truncate text-[--text-body-medium] leading-[--text-body-medium--line-height] font-[--text-body-medium--font-weight] text-[--color-dark-900]">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-1 truncate text-[--text-footnote] leading-[--text-footnote--line-height] font-[--text-footnote--font-weight] text-[--color-dark-700]">
              {subtitle}
            </p>
          ) : null}
        </div>
        {price !== undefined ? (
          <span className="shrink-0 text-[--text-body-medium] leading-[--text-body-medium--line-height] font-[--text-body-medium--font-weight] text-[--color-dark-900]">
            {typeof price === "number" ? `$${price.toFixed(2)}` : price}
          </span>
        ) : null}
      </div>
    </a>
  );
}
