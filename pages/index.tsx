import type {NextPage} from 'next'
import HTag from '../components/HTag'
import Button from '../components/Button'
import PTag from '../components/PTag'

const Home: NextPage = () => {
    return (
        <>
            <HTag tag="h3">This is HTag children</HTag>
            <Button arrow="right" appereance="primary">Click</Button>
            <Button arrow="down" appereance="ghost">Click</Button>
            <PTag size='small'>Small</PTag>
            <PTag>Medium</PTag>
            <PTag size='large'>Large</PTag>
        </>
    )
}

export default Home
