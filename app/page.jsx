import Nav from '../components/Nav'

export default function Home() {
  return (
    <main className="home">
      <Nav />

      <section className="stage">
        <div className="model-wrap">
          <a href="/outfits/01" className="model-card">
            <img src="/IMG_0332.PNG" alt="Outfit 01" className="home-model" />
          </a>

          <a href="/outfits/02" className="model-card">
            <img src="/IMG_0333.PNG" alt="Outfit 02" className="home-model" />
          </a>

          <a href="/outfits/03" className="model-card">
            <img src="/IMG_0334.PNG" alt="Outfit 03" className="home-model" />
          </a>
        </div>
      </section>
    </main>
  )
}