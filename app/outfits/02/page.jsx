'use client'
import Nav from '../../../components/Nav'
import Link from 'next/link'

const items = [
  ['TOP 02', '/products/top-02'],
  ['SKIRT 02', '/products/skirt-02'],
  ['SOCKS 02', '/products/socks-02'],
  ['SHOES 02', '/products/shoes-02'],
  ['RING 02', '/products/ring-02'],
]

export default function Outfit02() {
  return (
    <>
      <Nav />
      <main className="outfit-page">
        <section className="outfit-detail">
          <div className="outfit-model">
            <img src="/IMG_0333.PNG" alt="Outfit 02" className="outfit-image" />
          </div>

          <div className="outfit-items">
            {items.map(([name, href]) => (
              <Link href={href} className="outfit-item" key={name}>
                <div className="product-placeholder">{name}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
