"use client"

import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    function setCanvasSize() {
      if (!canvas) return
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    setCanvasSize()

    type Particle = { x: number; y: number; size: number; vx: number; vy: number }
    const particles: Particle[] = []
    const particleCount = 40
    const w = () => canvas.clientWidth
    const h = () => canvas.clientHeight

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        size: Math.random() * 1.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      })
    }

    let rafId = 0
    let running = true

    function tick() {
      if (!ctx || !running) return
      ctx.clearRect(0, 0, w(), h())
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x > w()) p.x = 0
        if (p.x < 0) p.x = w()
        if (p.y > h()) p.y = 0
        if (p.y < 0) p.y = h()
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
      rafId = requestAnimationFrame(tick)
    }
    tick()

    const handleResize = () => setCanvasSize()
    const handleVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(rafId)
      } else if (!running) {
        running = true
        tick()
      }
    }

    const ro = new ResizeObserver(handleResize)
    ro.observe(document.documentElement)
    window.addEventListener("resize", handleResize)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      ro.disconnect()
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1, backgroundColor: "transparent" }}
    />
  )
}
