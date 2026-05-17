import Nav from './Nav'

export default function PageShell({ title, children }) {
  return (
    <main className="page-shell">
      <Nav />
      <section className="page-content">
        <h1>{title}</h1>
        {children}
      </section>
    </main>
  )
}
