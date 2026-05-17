import PageShell from '../../components/PageShell'
import ProductGrid from '../../components/ProductGrid'
const items = [
  { name: 'LONG SLEEVE 01', description: 'washed grey, narrow body, sleeves too long', initial: '01' },
  { name: 'SMALL TEE 01', description: 'thin cotton, tired neckline, small size', initial: '02' },
  { name: 'SKINNY TOP 02', description: 'pale green rib, quiet stretch', initial: '03' }
]
export default function Tops(){ return <PageShell title="TOPS"><ProductGrid items={items}/></PageShell> }
