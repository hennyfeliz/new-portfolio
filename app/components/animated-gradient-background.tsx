"use client"

export default function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-black" />
      {/* Gradientes animados - rojo/negro */}
      <div className="gradient-blob gradient-blob-1" />
      <div className="gradient-blob gradient-blob-2" />
      <div className="gradient-blob gradient-blob-3" />
      <div className="gradient-blob gradient-blob-4" />
    </div>
  )
}

