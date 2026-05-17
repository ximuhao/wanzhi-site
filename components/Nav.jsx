import Link from 'next/link'

export default function Nav() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        <span>WANZHI</span>
        <small>BY XI MUHAO</small>
      </Link>
      <nav>
        <Link href="/tops">TOPS</Link>
        <Link href="/skirts">SKIRTS</Link>
        <Link href="/shoes">SHOES</Link>
        <Link href="/accessories">ACCESSORIES</Link>
        <Link href="/about">ABOUT</Link>
      </nav>
    </header>
  )
}
