'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Nav from '../components/Nav'

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [label, setLabel] = useState('')
  const router = useRouter()
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPos({ x: (e.clientX - r.left) / r.width - .5, y: (e.clientY - r.top) / r.height - .5 })
  }
  return (
    <main className="home" onMouseMove={move}>
      <Nav />
      <section className="stage">
        <div className="model-wrap">
          <div className="model-card">
            <div className="model">
              <div className="hair" />
              <div className="neck" />
              <div className="top" />
              <div className="sleeve left" /><div className="sleeve right" />
              <div className="skirt" />
              <div className="leg left" /><div className="leg right" />
              <div className="shoe left" /><div className="shoe right" />
              <div className="bag" /><div className="ring" /><div className="clip" />
              <div className="head" style={{ transform: `translateX(-50%) translate(${pos.x * 8}px, ${pos.y * 4}px) rotate(${pos.x * 3}deg)` }}>
                <span className="eye left" style={{ transform: `translate(${pos.x * 10}px, ${pos.y * 4}px)` }} />
                <span className="eye right" style={{ transform: `translate(${pos.x * 10}px, ${pos.y * 4}px)` }} />
                <span className="mouth" />
              </div>
            </div>
            <button className="hotspot top-zone" onMouseEnter={() => setLabel('LONG SLEEVE 01')} onMouseLeave={() => setLabel('')} onClick={() => router.push('/tops')} />
            <button className="hotspot skirt-zone" onMouseEnter={() => setLabel('SKIRT 01')} onMouseLeave={() => setLabel('')} onClick={() => router.push('/skirts')} />
            <button className="hotspot shoes-zone" onMouseEnter={() => setLabel('SHOES 01')} onMouseLeave={() => setLabel('')} onClick={() => router.push('/shoes')} />
            <button className="hotspot acc-zone" onMouseEnter={() => setLabel('ACCESSORIES')} onMouseLeave={() => setLabel('')} onClick={() => router.push('/accessories')} />
            {label ? <div className="label">{label}</div> : null}
          </div>
        </div>
      </section>
      <div className="home-note">CLICK CLOTHES</div>
    </main>
  )
}
