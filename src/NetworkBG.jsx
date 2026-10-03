import { useEffect, useRef } from 'react'

// Floating bubbles background (file name kept so App.jsx import stays the same)
export default function NetworkBG() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    let raf, t = 0, bubbles = []
    const make = (fresh) => ({
      r: 4 + Math.random() * 20,
      x: Math.random() * c.width,
      y: fresh ? Math.random() * c.height : c.height + 40,
      v: 0.25 + Math.random() * 0.6,
      sway: 10 + Math.random() * 25,
      ph: Math.random() * 6.28,
    })
    const resize = () => {
      c.width = window.innerWidth; c.height = window.innerHeight
      const n = Math.min(40, Math.max(14, Math.floor(c.width / 36)))
      bubbles = Array.from({ length: n }, () => make(true))
    }
    resize(); window.addEventListener('resize', resize)
    const draw = () => {
      t += 0.01
      const a = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim().split(' ').join(',')
      ctx.clearRect(0, 0, c.width, c.height)
      bubbles.forEach((b, i) => {
        b.y -= b.v
        if (b.y < -40) bubbles[i] = make(false)
        const x = b.x + Math.sin(t * 2 + b.ph) * b.sway
        const g = ctx.createRadialGradient(x - b.r * 0.35, b.y - b.r * 0.35, b.r * 0.1, x, b.y, b.r)
        g.addColorStop(0, `rgba(${a},0.28)`); g.addColorStop(1, `rgba(${a},0.05)`)
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, b.y, b.r, 0, 7); ctx.fill()
        ctx.strokeStyle = `rgba(${a},0.35)`; ctx.lineWidth = 1; ctx.stroke()
        ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.beginPath(); ctx.arc(x - b.r * 0.35, b.y - b.r * 0.35, b.r * 0.18, 0, 7); ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" />
}
