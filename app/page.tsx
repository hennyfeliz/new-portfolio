import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import ParticlesBackground from "./components/particles-background"
import AnimatedGradientBackground from "./components/animated-gradient-background"

export default function Page() {
  return (
    <main className="relative bg-black text-white snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      <AnimatedGradientBackground />
      <ParticlesBackground />
      <div className="relative z-10">
        <Hero />
        <Gallery />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
