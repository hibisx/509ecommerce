import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <aside className="hidden md:flex flex-col justify-between bg-[--color-dark-900] text-[--color-light-100] p-8">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Brand" width={36} height={36} className="rounded-md" />
        </div>

        <div>
          <h2 className="text-[28px] leading-[--text-heading-3--line-height] font-medium">
            Just Do It
          </h2>
          <p className="mt-3 text-[--color-light-400] text-[--text-body] leading-[--text-body--line-height] max-w-sm">
            Join millions of athletes and fitness enthusiasts who trust Nike for
            their performance needs.
          </p>
          <div className="mt-6 flex gap-2">
            <span className="h-2 w-2 rounded-full bg-[--color-light-200]" />
            <span className="h-2 w-2 rounded-full bg-[--color-light-400]" />
            <span className="h-2 w-2 rounded-full bg-[--color-light-400]" />
          </div>
        </div>

        <p className="text-[--text-footnote] text-[--color-light-400]">
          © 2024 Nike. All rights reserved.
        </p>
      </aside>

      <main className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
