'use client'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <main className="home">
      <Nav />
      <section className="stage">
        <div className="model-wrap">
          <div className="model-card">
            <a href="/outfits/01" className="model-link">
              <img src="/IMG_0332.PNG" alt="Home model" className="home-model" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
