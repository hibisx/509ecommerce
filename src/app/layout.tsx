import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";

export const metadata: Metadata = {
  title: "Nike E-Commerce",
  description: "Nike products e-commerce store",
};

const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}
