import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Henny Feliz - Software Developer",
  description: "Portfolio of Henny Feliz, Software Developer specializing in Java, React, and modern web technologies",
  keywords: ["Software Developer", "Java", "React", "TypeScript", "Portfolio"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark h-full overflow-hidden">
      <body className={`${inter.className} h-full overflow-hidden`}>{children}</body>
    </html>
  )
}
