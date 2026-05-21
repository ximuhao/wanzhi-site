'use client'
import Nav from '../../../components/Nav'
import Link from 'next/link'

const items = [
  {
    name: 'TOP 03',
    href: '/products/top-03',
    image: '/top03.PNG',
  },
  {
    name: 'SKIRT 03',
    href: '/products/skirt-03',
    image: '/skirt03.PNG',
  },
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
            {items.map(({ name, href, image }) => (
              <Link href={href} className="outfit-item" key={name}>
                <div className="product-placeholder">
                  <img src={image} alt={name} />
                  <span>{name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
