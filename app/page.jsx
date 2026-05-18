'use client'
import { useRouter } from 'next/navigation'
import Nav from '../components/Nav'

export default function Home() {
  const router = useRouter()
  
  return (
    <main className="home">
      <Nav />
      <section className="stage">
        <div className="model-wrap">
          <div className="model-card">
            <img src="/IMG_0332.PNG" alt="Home model" className="home-model" />
            <button 
              className="top-mask-btn"
              onClick={() => router.push('/tops')}
              aria-label="View tops collection"
            />
            <img src="/top-mask.png" alt="" className="top-mask" />
            <button
  className="skirt-mask-btn"
  onClick={() => router.push('/skirts')}
  aria-label="View skirts collection"
/>

<img src="/skirt-mask.png" alt="" className="skirt-mask" />
          </div>
        </div>
      </section>
    </main>
  )
}
