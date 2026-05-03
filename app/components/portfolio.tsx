"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  CATEGORY_GRADIENT,
  CATEGORY_LABELS,
  PROJECTS,
  type ProjectCategory,
} from "@/lib/projects"

type Filter = "all" | ProjectCategory

const FILTERS: Filter[] = ["all", "react", "java", "react-native"]

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all")

  const filtered = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section
      id="projects"
      className="relative h-screen snap-center flex items-center justify-center"
    >
      <div className="container mx-auto px-6 w-full max-w-7xl">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[hsl(var(--accent-red))]">
            Selected work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
        </motion.div>

        <motion.div
          className="mb-6 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          role="tablist"
          aria-label="Project categories"
        >
          {FILTERS.map((f) => {
            const active = filter === f
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                  active
                    ? "bg-[hsl(var(--accent-red))] text-white shadow-[0_0_18px_hsl(var(--accent-red)/0.5)]"
                    : "border border-white/15 bg-white/5 text-zinc-300 hover:border-white/35 hover:text-white"
                }`}
              >
                {CATEGORY_LABELS[f]}
              </button>
            )
          })}
        </motion.div>

        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, index) => (
              <motion.article
                key={p.id}
                layout
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.01 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                className="glass group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-red)/0.5)]"
              >
                <div
                  className="relative aspect-[5/3] overflow-hidden"
                  style={{ background: CATEGORY_GRADIENT[p.category] }}
                >
                  <Image
                    src={p.imageUrl}
                    alt={`${p.title} thumbnail`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_60%)]"
                    aria-hidden="true"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[9px] uppercase tracking-widest text-white/80 backdrop-blur-sm">
                    {p.year}
                  </span>
                  <span
                    className="absolute left-2 bottom-2 inline-block h-1 w-8 bg-[hsl(var(--accent-red))]"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-3">
                  <h3 className="mb-1 text-sm font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-zinc-300">
                    {p.description}
                  </p>

                  <ul className="mb-3 flex flex-wrap gap-1">
                    {p.techTags.slice(0, 3).map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-zinc-300"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex gap-1.5">
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 border border-white/15 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-widest text-zinc-200 transition-colors hover:border-[hsl(var(--accent-red)/0.6)] hover:text-white"
                      >
                        Code →
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-[hsl(var(--accent-red))] px-2 py-1 text-[10px] uppercase tracking-widest text-white transition-all hover:bg-[hsl(var(--accent-red)/0.85)]"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
