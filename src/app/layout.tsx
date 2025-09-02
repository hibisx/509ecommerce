import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";

export const metadata: Metadata = {
  title: "Nike E-Commerce",
  description: "Nike Shoes E-Commerce Store",
};

const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased bg-[--color-light-100] text-[--color-dark-900]`}>
        {children}
      </body>
    </html>
  );
}
