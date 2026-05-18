'use client'
import Nav from '../../../components/Nav'
import Link from 'next/link'

export default function Outfit01(){
  return (
    <>
      <Nav />
      <main className="outfit-page">
        <div className="outfit-container">
          <div className="outfit-left">
            <a href="/outfits/01" className="model-link">
              <img src="/IMG_0332.PNG" alt="Outfit 01" className="outfit-image" />
            </a>
          </div>
          <aside className="outfit-right">
            <div className="product-grid">
              <a href="/tops" className="product-card"><div className="product-placeholder">TOP 01</div></a>
              <a href="/skirts" className="product-card"><div className="product-placeholder">SKIRT 01</div></a>
              <a href="/accessories" className="product-card"><div className="product-placeholder">SOCKS 01</div></a>
              <a href="/shoes" className="product-card"><div className="product-placeholder">SHOES 01</div></a>
              <a href="/accessories" className="product-card"><div className="product-placeholder">RING 01</div></a>
              <a href="/accessories" className="product-card"><div className="product-placeholder">HAIR CLIP 01</div></a>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
