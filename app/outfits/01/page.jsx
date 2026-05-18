'use client'
import Nav from '../../../components/Nav'
import Link from 'next/link'

const items = [
  { name: 'TOP 01', href: '/products/top-01', image: '/top01.PNG' },
  { name: 'SKIRT 01', href: '/products/skirt-01', image: '/skirt01.PNG' },
  { name: 'SHOES 01', href: '/products/shoes-01', image: '/shoes01.PNG' },
]

export default function Outfit01() {
  return (
    <>
      <Nav />
      <main className="outfit-page outfit-01">
        <section className="outfit-detail">
          <div className="outfit-model">
            <img src="/IMG_0332.PNG" alt="Outfit 01" />
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