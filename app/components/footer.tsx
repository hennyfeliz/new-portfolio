"use client"

import { motion } from "framer-motion"

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/henny-m-feliz-ferreras-392a61202",
  },
  { label: "GitHub", href: "https://github.com/hennyfeliz" },
  { label: "Email", href: "mailto:hennyfeliz34@gmail.com" },
] as const

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      className="fixed bottom-6 left-6 right-6 z-20 flex items-center justify-between gap-6 text-xs text-zinc-400 md:left-8 md:right-24 md:bottom-8"
    >
      <span className="hidden sm:inline-block">
        © {new Date().getFullYear()} Henny Feliz
      </span>
      <ul className="flex gap-5">
        {LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={
                l.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
