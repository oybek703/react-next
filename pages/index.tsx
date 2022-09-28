import type {NextPage} from 'next'
import HTag from '../components/HTag'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <div>
      <HTag tag='h3'>This is HTag children</HTag>
        <Button appereance='primary'>Click</Button>
        <Button appereance='ghost'>Click</Button>
    </div>
  )
}

export default Home
