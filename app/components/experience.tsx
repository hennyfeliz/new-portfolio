"use client"

import { motion } from "framer-motion"

type Role = {
  company: string
  position: string
  period: string
  location: string
  bullets: string[]
  stack: string[]
}

const ROLES: Role[] = [
  {
    company: "BanReservasRD",
    position: "Software Developer",
    period: "Nov 2022 – Present",
    location: "Dominican Republic · Remote",
    bullets: [
      "Develop enterprise web applications using JavaServer Faces (JSF).",
      "Guide users, listen to feedback and implement new features upon request.",
      "Migrate legacy JSF applications to Spring Boot, Quarkus and React.",
      "Ensure code quality through code reviews and best practices.",
    ],
    stack: ["Java", "JSF", "Spring Boot", "Quarkus", "React", "SQL"],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative h-screen snap-center flex items-center justify-center"
    >
      <div className="container mx-auto px-6 w-full max-w-4xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[hsl(var(--accent-red))]">
            Career
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          <span
            aria-hidden="true"
            className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(var(--accent-red))] via-white/20 to-transparent"
          />
          {ROLES.map((role, i) => (
            <motion.article
              key={role.company}
              className="glass relative p-6 sm:p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            >
              <span
                aria-hidden="true"
                className="absolute -left-[26px] top-7 h-3 w-3 rounded-full bg-[hsl(var(--accent-red))] shadow-[0_0_12px_hsl(var(--accent-red)/0.8)] sm:-left-[38px]"
              />
              <header className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {role.position}
                  </h3>
                  <p className="text-sm text-zinc-300">
                    <span className="text-[hsl(var(--accent-red))]">
                      {role.company}
                    </span>{" "}
                    · {role.location}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest text-zinc-400">
                  {role.period}
                </span>
              </header>

              <ul className="mb-5 space-y-2">
                {role.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm text-zinc-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-1 w-3 shrink-0 bg-[hsl(var(--accent-red))]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-2">
                {role.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-200"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
