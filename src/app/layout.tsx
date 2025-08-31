import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '509 E-Commerce',
  description: 'Nike products e-commerce store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}