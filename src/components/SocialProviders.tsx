"use client";

import React from "react";
import Image from "next/image";

type Props = {
  onGoogle?: () => void;
  onApple?: () => void;
};

export default function SocialProviders({ onGoogle, onApple }: Props) {
  const base =
    "w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[--color-light-300] px-4 py-3 text-[--color-dark-900] hover:bg-[--color-light-200] focus:outline-none focus:ring-2 focus:ring-[--color-dark-900]/20 transition";
  return (
    <div className="space-y-3">
      <button
        type="button"
        className={base}
        onClick={onGoogle}
        aria-label="Continue with Google"
      >
        <Image src="/google.svg" alt="" width={20} height={20} />
        <span className="font-medium">Continue with Google</span>
      </button>
      <button
        type="button"
        className={base}
        onClick={onApple}
        aria-label="Continue with Apple"
      >
        <Image src="/apple.svg" alt="" width={20} height={20} />
        <span className="font-medium">Continue with Apple</span>
      </button>
    </div>
  );
}
