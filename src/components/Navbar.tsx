"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href?: string;
};

interface NavbarProps {
  items?: NavItem[];
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Men" },
  { label: "Women" },
  { label: "Kids" },
  { label: "Collections" },
  { label: "Contact" },
];

export default function Navbar({ items = DEFAULT_ITEMS }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-[--color-light-300] bg-[--color-light-100]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6"
        aria-label="Primary"
      >
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="Home">
            <Image src="/logo.svg" alt="Brand logo" width={36} height={36} priority />
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[--color-light-300] md:hidden"
          aria-label="Toggle menu"
          aria-controls="primary-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-[--color-dark-900] transition-all ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-[--color-dark-900] transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-[--color-dark-900] transition-all ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href ?? "#"}
                className="text-[--text-body] leading-[--text-body--line-height] font-[--text-body--font-weight] text-[--color-dark-900] hover:text-[--color-dark-700]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <button className="text-[--color-dark-900] hover:text-[--color-dark-700]">
            Search
          </button>
          <button className="text-[--color-dark-900] hover:text-[--color-dark-700]">
            My Cart (2)
          </button>
        </div>
      </nav>

      <div
        id="primary-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-[--color-light-300] bg-[--color-light-100]`}
      >
        <ul className="mx-auto grid max-w-7xl gap-2 px-4 py-3">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href ?? "#"}
                className="block rounded-md px-2 py-2 text-[--color-dark-900] hover:bg-[--color-light-200]"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 grid grid-cols-2 gap-2">
            <button className="rounded-md border border-[--color-light-300] px-3 py-2 text-left">
              Search
            </button>
            <button className="rounded-md border border-[--color-light-300] px-3 py-2 text-left">
              My Cart (2)
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
