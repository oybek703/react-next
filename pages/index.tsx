import type {NextPage} from 'next'
import HTag from '../components/HTag'

const Home: NextPage = () => {
  return (
    <div>
      <HTag tag='h3'>This is HTag children</HTag>
    </div>
  )
}

export default Home
