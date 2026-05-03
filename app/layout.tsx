import "@/styles/globals.css"
import { Onest } from "next/font/google"
import type React from "react"
import type { Metadata, Viewport } from "next"

const onest = Onest({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-onest",
  display: "swap",
})

const SITE_URL = "https://hennyfeliz.site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Henny Feliz · Software Developer",
    template: "%s · Henny Feliz",
  },
  description:
    "Software Developer based in Santo Domingo, DR. 3+ years building enterprise applications with Java (Quarkus, Spring Boot, JSF) and React at BanReservasRD.",
  keywords: [
    "Henny Feliz",
    "Software Developer",
    "Java",
    "Quarkus",
    "Spring Boot",
    "JSF",
    "ReactJS",
    "TypeScript",
    "Dominican Republic",
    "BanReservas",
    "Portfolio",
  ],
  authors: [{ name: "Henny Feliz", url: SITE_URL }],
  creator: "Henny Feliz",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Henny Feliz",
    title: "Henny Feliz · Software Developer",
    description:
      "Java + React developer with 3+ years of experience building enterprise apps at BanReservasRD.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Henny Feliz · Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henny Feliz · Software Developer",
    description:
      "Java + React developer with 3+ years of experience building enterprise apps at BanReservasRD.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark h-full ${onest.variable}`}>
      <body
        className={`${onest.className} h-full overflow-hidden`}
        style={{ fontFamily: onest.style.fontFamily }}
      >
        {children}
      </body>
    </html>
  )
}
