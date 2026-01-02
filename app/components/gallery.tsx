"use client"

import { motion } from "framer-motion"

export default function Gallery() {

  const images = [
    {
      src: "https://placehold.co/400x600/6366f1/ffffff?text=Instagram+Clone%0A📱+React+Native",
      alt: "Instagram Clone - React Native Mobile App",
      title: "Instagram Clone",
      description: "React Native Mobile App",
    },
    {
      src: "https://placehold.co/400x600/ec4899/ffffff?text=Music+Player%0A🎵+React+Tailwind",
      alt: "Music Player - ReactJS + Tailwind CSS",
      title: "Music Player",
      description: "ReactJS + Tailwind CSS",
    },
    {
      src: "https://placehold.co/400x600/10b981/ffffff?text=Ecommerce+App%0A🛒+React+Spring",
      alt: "Ecommerce App - ReactJS + Spring Boot",
      title: "Ecommerce App",
      description: "ReactJS + Spring Boot",
    },
    {
      src: "https://placehold.co/400x600/f59e0b/ffffff?text=BanReservas+Migration%0A⚙️+Java+Enterprise",
      alt: "BanReservas Migration - Java Enterprise",
      title: "BanReservas Migration",
      description: "Java + Spring Boot + Quarkus",
    },
  ]

  return (
    <section className="relative h-screen snap-center flex items-center justify-center">
      <div className="container mx-auto px-4 w-full">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Featured Works
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                background: "rgba(240, 223, 223, 0.09)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5.4px)",
                WebkitBackdropFilter: "blur(5.4px)",
                border: "1px solid rgba(240, 223, 223, 0.24)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ 
                x: 4, 
                y: -4,
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/5 flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-400 text-center">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

