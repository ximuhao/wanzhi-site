'use client'
import Nav from '../../../components/Nav'
import Link from 'next/link'

const items = [
  ['TOP 03', '/products/top-03'],
  ['SKIRT 03', '/products/skirt-03'],
  ['SOCKS 03', '/products/socks-03'],
  ['SHOES 03', '/products/shoes-03'],
  ['RING 03', '/products/ring-03'],
]

export default function Outfit03() {
  return (
    <>
      <Nav />
      <main className="outfit-page">
        <section className="outfit-detail">
          <div className="outfit-model">
            <img src="/IMG_0334.PNG" alt="Outfit 03" />
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
