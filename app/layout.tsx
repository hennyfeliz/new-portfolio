import "@/styles/globals.css"
import { Onest } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"

const onest = Onest({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-onest"
})

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
    <html lang="en" className={`dark h-full overflow-hidden ${onest.variable}`}>
      <body className={`${onest.className} h-full overflow-hidden`} style={{ fontFamily: onest.style.fontFamily }}>{children}</body>
    </html>
  )
}
