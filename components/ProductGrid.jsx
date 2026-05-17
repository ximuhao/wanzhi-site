export default function ProductGrid({ items }) {
  return <div className="product-grid">{items.map((item) => (
    <article className="product-card" key={item.name}>
      <div className="product-image">{item.initial}</div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </article>
  ))}</div>
}
