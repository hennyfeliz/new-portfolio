"use client"

import { motion } from "framer-motion"

const STATS = [
  { value: "3+", label: "Years" },
  { value: "Java", label: "& React" },
  { value: "Enterprise", label: "Scale" },
] as const

function scrollToProjects() {
  const root = document.getElementById("scrollRoot")
  const target = document.getElementById("projects")
  if (root && target) root.scrollTo({ top: target.offsetTop, behavior: "smooth" })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden snap-center"
    >
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="mb-6 text-xs uppercase tracking-[0.4em] text-zinc-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block h-px w-8 align-middle bg-[hsl(var(--accent-red))] mr-3" />
          Software Developer · Santo Domingo, DR
        </motion.p>

        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          HENNY FELIZ
        </motion.h1>

        <motion.p
          className="mb-10 max-w-2xl text-base text-zinc-300 sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Building enterprise applications at{" "}
          <span className="text-white font-medium">BanReservasRD</span> with{" "}
          {/* <span className="text-white font-medium"> */}
          {/*   Java (Quarkus, Spring Boot, JSF) */}
          {/* </span>{" "} */}
          and <span className="text-white font-medium">React</span>.
        </motion.p>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-white">{s.value}</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        >
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center bg-[hsl(var(--accent-red))] px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-all hover:bg-[hsl(var(--accent-red)/0.85)] hover:shadow-[0_0_28px_hsl(var(--accent-red)/0.55)]"
          >
            View Projects
          </button>
          <a
            href="/henny-feliz-cv.pdf"
            download
            className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
