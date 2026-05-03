"use client"

import { motion } from "framer-motion"

const QUICK_FACTS = [
  { label: "Location", value: "Santo Domingo, DR" },
  { label: "Role", value: "Software Developer" },
  { label: "Company", value: "BanReservasRD" },
  { label: "Languages", value: "EN B2 · ES Native" },
] as const

const EDUCATION = [
  {
    school: "Autonomous University of Santo Domingo",
    program: "Application Design and Development",
    period: "2022 – Present",
  },
  {
    school: "INFOTEP",
    program: "Application Design and Development",
    period: "2021 – 2022",
  },
] as const

export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen snap-center flex items-center justify-center"
    >
      <div className="container mx-auto px-6 w-full max-w-6xl">
        <motion.div
          className="grid gap-12 md:grid-cols-[260px_1fr] md:gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-[hsl(var(--accent-red)/0.25)] blur-2xl" />
              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]">
                <span className="text-6xl font-bold tracking-tighter text-white">
                  HF
                </span>
                <span className="absolute -bottom-2 -right-2 inline-block h-4 w-4 rounded-full bg-[hsl(var(--accent-red))] shadow-[0_0_16px_hsl(var(--accent-red)/0.8)]" />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[hsl(var(--accent-red))]">
              About me
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Detail-oriented developer building enterprise software.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-zinc-300">
              Highly skilled software developer with{" "}
              <span className="text-white font-medium">
                3+ years of experience
              </span>{" "}
              designing, developing and deploying enterprise-level applications.
              Proficient in multiple languages, software development
              methodologies and database systems. Strong problem-solving skills
              and effective in team-based environments.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {QUICK_FACTS.map((f) => (
                <div key={f.label} className="border-l-2 border-[hsl(var(--accent-red))] pl-3">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                    {f.label}
                  </p>
                  <p className="text-sm font-medium text-white">{f.value}</p>
                </div>
              ))}
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
                Education
              </p>
              <ul className="space-y-2">
                {EDUCATION.map((e) => (
                  <li
                    key={e.school}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                  >
                    <span className="text-sm">
                      <span className="font-medium text-white">{e.school}</span>
                      <span className="text-zinc-400"> · {e.program}</span>
                    </span>
                    <span className="text-xs text-zinc-500">{e.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
