'use client'
import Nav from '../../../components/Nav'
import Link from 'next/link'

const items = [
  {
    name: 'TOP 02',
    href: '/products/top-02',
    image: '/top02.PNG',
  },
  {
    name: 'SKIRT 02',
    href: '/products/skirt-02',
    image: '/skirt02.PNG',
  },
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
