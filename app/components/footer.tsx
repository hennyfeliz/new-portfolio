"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-20"
    >
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/henny-m-feliz-ferreras-392a61202"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

