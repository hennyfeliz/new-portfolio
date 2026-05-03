import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import SideNav from "./components/side-nav"
import ParticlesBackground from "./components/particles-background"
import AnimatedGradientBackground from "./components/animated-gradient-background"

export default function Page() {
  return (
    <main
      id="scrollRoot"
      className="relative bg-black text-white snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth"
    >
      <AnimatedGradientBackground />
      <ParticlesBackground />
      <SideNav />
      <Footer />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </main>
  )
}
