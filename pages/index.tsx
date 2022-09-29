import type {NextPage} from 'next'
import HTag from '../components/HTag'
import Button from '../components/Button'

const Home: NextPage = () => {
  return (
    <div>
      <HTag tag='h3'>This is HTag children</HTag>
        <Button arrow='right' appereance='primary'>Click</Button>
        <Button arrow='down' appereance='ghost'>Click</Button>
    </div>
  )
}

export default Home
