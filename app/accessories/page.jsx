import PageShell from '../../components/PageShell'
import ProductGrid from '../../components/ProductGrid'
const items = [
  { name: 'RING 01', description: 'scratched silver', initial: '01' },
  { name: 'HAIR CLIP 01', description: 'worn every day', initial: '02' },
  { name: 'BAG 01', description: 'soft leather, collapsed shape', initial: '03' },
  { name: 'NECKLACE 01', description: 'thin line against a washed collar', initial: '04' },
  { name: 'BRACELET 01', description: 'small object archive', initial: '05' }
]
export default function Accessories(){ return <PageShell title="ACCESSORIES"><ProductGrid items={items}/></PageShell> }
