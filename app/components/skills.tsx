"use client"

import { motion } from "framer-motion"

type SkillGroup = {
  title: string
  subtitle: string
  skills: string[]
}

const GROUPS: SkillGroup[] = [
  {
    title: "Backend",
    subtitle: "JVM ecosystem, scalable services",
    skills: ["Java", "Quarkus", "Spring Boot", "JSF"],
  },
  {
    title: "Frontend",
    subtitle: "Modern web UI",
    skills: ["ReactJS", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Data",
    subtitle: "Relational databases",
    skills: ["SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    subtitle: "Workflow & quality",
    skills: ["Git", "GitLab", "GitHub", "API Testing"],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative h-screen snap-center flex items-center justify-center"
    >
      <div className="container mx-auto px-6 w-full max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[hsl(var(--accent-red))]">
            What I work with
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-red)/0.5)]"
            >
              <div className="mb-4 flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  {group.subtitle}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 transition-colors hover:border-[hsl(var(--accent-red)/0.6)] hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
