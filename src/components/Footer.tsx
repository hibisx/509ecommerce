import React from "react";

import Image from "next/image";

type LinkItem = { label: string; href?: string };
type LinkGroup = { title: string; items: LinkItem[] };

interface FooterProps {
  groups?: LinkGroup[];
  showLogo?: boolean;
  year?: number;
}

const DEFAULT_GROUPS: LinkGroup[] = [
  {
    title: "Featured",
    items: [
      { label: "Air Force 1" },
      { label: "Huarache" },
      { label: "Air Max 90" },
      { label: "Air Max 95" },
    ],
  },
  {
    title: "Shoes",
    items: [
      { label: "All Shoes" },
      { label: "Custom Shoes" },
      { label: "Jordan Shoes" },
      { label: "Running Shoes" },
    ],
  },
  {
    title: "Clothing",
    items: [
      { label: "All Clothing" },
      { label: "Modest Wear" },
      { label: "Hoodies & Pullovers" },
      { label: "Shirts & Tops" },
    ],
  },
  {
    title: "Kids'",
    items: [
      { label: "Infant & Toddler Shoes" },
      { label: "Kids' Shoes" },
      { label: "Kids' Jordan Shoes" },
      { label: "Kids' Basketball Shoes" },
    ],
  },
];

export default function Footer({
  groups = DEFAULT_GROUPS,
  showLogo = true,
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="w-full bg-black text-[--color-light-100]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-12 md:px-6 md:py-12">
        <div className="md:col-span-3">
          {showLogo && (
            <Image
              src="/logo.svg"
              alt="Brand logo"
              width={64}
              height={64}
              className="invert"
            />
          )}
        </div>

        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 text-[--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.items.map((it) => (
                    <li key={it.label}>
                      <a
                        href={it.href ?? "#"}
                        className="text-[--color-dark-500] hover:text-[--color-light-300]"
                      >
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-start gap-4 md:col-span-2 md:justify-end">
          {["/x.svg", "/facebook.svg", "/instagram.svg"].map((src) => (
            <a
              key={src}
              href="#"
              aria-label={src.replace("/", "").replace(".svg", "")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--color-light-100]"
            >
              <Image
                src={src}
                alt=""
                width={18}
                height={18}
                className="invert-0"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-[--text-footnote] text-[--color-light-300] md:flex-row md:px-6">
          <p>&copy; {year} Nike E-Commerce. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[--color-light-100]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[--color-light-100]">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[--color-light-100]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
