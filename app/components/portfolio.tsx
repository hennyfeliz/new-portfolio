"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "react", "java", "react-native"]

  const works = [
    {
      id: 1,
      title: "Instagram Clone",
      category: "react-native",
      image: "https://placehold.co/600x400/6366f1/ffffff?text=Instagram+Clone%0A📱+React+Native+Mobile",
      year: "2024",
      tech: "React Native",
    },
    {
      id: 2,
      title: "Music Player",
      category: "react",
      image: "https://placehold.co/600x400/ec4899/ffffff?text=Music+Player%0A🎵+React+Tailwind+CSS",
      year: "2024",
      tech: "ReactJS + Tailwind CSS",
    },
    {
      id: 3,
      title: "Ecommerce App",
      category: "react",
      image: "https://placehold.co/600x400/10b981/ffffff?text=Ecommerce+App%0A🛒+React+Spring+Boot",
      year: "2024",
      tech: "ReactJS + Spring Boot",
    },
    {
      id: 4,
      title: "BanReservas Migration",
      category: "java",
      image: "https://placehold.co/600x400/f59e0b/ffffff?text=Enterprise+Migration%0A⚙️+Java+Spring+Quarkus",
      year: "2023",
      tech: "Java + Spring Boot + Quarkus",
    },
    {
      id: 5,
      title: "Web Application",
      category: "java",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=Enterprise+Web+App%0A💼+Java+JSF",
      year: "2023",
      tech: "Java + JSF",
    },
    {
      id: 6,
      title: "React Dashboard",
      category: "react",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Analytics+Dashboard%0A📊+React+TypeScript",
      year: "2024",
      tech: "ReactJS + TypeScript",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="h-screen snap-center flex items-center justify-center">
      <div className="container mx-auto px-4 w-full">
        <motion.div 
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: categories.indexOf(category) * 0.1 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm capitalize px-8 py-1.5 h-auto min-w-[120px] rounded-none"
              >
                {category === "all" ? "All" : category === "react" ? "React" : category === "java" ? "Java" : "React Native"}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card 
                  className="overflow-hidden transition-all duration-300 hover:translate-x-1 hover:-translate-y-1 cursor-pointer shadow-none bg-transparent rounded-none border-2"
                  style={{
                    background: "rgba(240, 223, 223, 0.09)",
                    borderRadius: "0",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5.4px)",
                    WebkitBackdropFilter: "blur(5.4px)",
                    border: "2px solid rgba(240, 223, 223, 0.24)",
                  }}
                >
                  <CardContent className="p-0">
                    <div className="group relative">
                      <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 flex flex-col items-center justify-center p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{work.title}</h3>
                        <p className="text-sm text-gray-400 mb-1">{work.tech}</p>
                        <p className="text-xs text-gray-500">{work.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

