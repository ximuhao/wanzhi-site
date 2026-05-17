import PageShell from '../../components/PageShell'
import ProductGrid from '../../components/ProductGrid'
const items = [
  { name: 'BALLET 01', description: 'flat black leather, quiet buckle', initial: '01' },
  { name: 'SHOES 01', description: 'worn red suede, ordinary street dust', initial: '02' },
  { name: 'FLAT 02', description: 'thin sole, daily archive', initial: '03' }
]
export default function Shoes(){ return <PageShell title="SHOES"><ProductGrid items={items}/></PageShell> }
