"use client"

import { useCallback, useEffect, useState } from "react"

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const

export default function SideNav() {
  const [active, setActive] = useState<string>("hero")

  const scrollTo = useCallback((id: string) => {
    const root = document.getElementById("scrollRoot")
    const target = document.getElementById(id)
    if (!root || !target) return
    root.scrollTo({ top: target.offsetTop, behavior: "smooth" })
  }, [])

  useEffect(() => {
    const root = document.getElementById("scrollRoot")
    if (!root) return

    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { root, threshold: [0.5, 0.75] },
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return
      const idx = SECTIONS.findIndex((s) => s.id === active)
      if (idx < 0) return
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        const next = SECTIONS[Math.min(idx + 1, SECTIONS.length - 1)]
        scrollTo(next.id)
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        const prev = SECTIONS[Math.max(idx - 1, 0)]
        scrollTo(prev.id)
      } else if (e.key === "Home") {
        e.preventDefault()
        scrollTo(SECTIONS[0].id)
      } else if (e.key === "End") {
        e.preventDefault()
        scrollTo(SECTIONS[SECTIONS.length - 1].id)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [active, scrollTo])

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-30 -translate-y-1/2 hidden md:block"
    >
      <ul className="flex flex-col items-end gap-5">
        {SECTIONS.map((s) => {
          const isActive = active === s.id
          return (
            <li key={s.id} className="flex justify-end">
              <button
                onClick={() => scrollTo(s.id)}
                aria-label={`Go to ${s.label}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex h-3 w-3 items-center justify-center focus:outline-none"
              >
                <span
                  className={`pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "text-white opacity-100"
                      : "text-white/60 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`inline-block h-2 w-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-150 bg-[hsl(var(--accent-red))] shadow-[0_0_12px_hsl(var(--accent-red)/0.8)]"
                      : "bg-white/30 group-hover:bg-white/70"
                  }`}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
