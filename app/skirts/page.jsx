import PageShell from '../../components/PageShell'
import ProductGrid from '../../components/ProductGrid'
const items = [
  { name: 'SKIRT 01', description: 'brown grey cotton, not ironed', initial: '01' },
  { name: 'SKIRT 02', description: 'thin volume below knee', initial: '02' },
  { name: 'HALF SKIRT 01', description: 'soft worn surface, low saturation', initial: '03' }
]
export default function Skirts(){ return <PageShell title="SKIRTS"><ProductGrid items={items}/></PageShell> }
