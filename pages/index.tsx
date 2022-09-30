import type {NextPage} from 'next'
import {Button, HTag, PTag, Rating, Tag} from '../components'
import {useState} from 'react'
import {withLayout} from '../layout/Layout'

const Home: NextPage = () => {
    const [rating, setRating] = useState<number>(2)
    return (
        <>
            <HTag tag="h3">This is HTag children</HTag>
            <Button arrow="right" appereance="primary">Click</Button>
            <Button arrow="down" appereance="ghost">Click</Button>
            <PTag size='small'>Small</PTag>
            <PTag>Medium</PTag>
            <PTag size='large'>Large</PTag>
            <Tag size='medium' color='grey'>Ghost</Tag>
            <Tag>Ghost</Tag>
            <Tag color='red'>Ghost</Tag>
            <Tag color='green'>Ghost</Tag>
            <Tag size='small' color='primary'>Ghost</Tag>
            <Rating editable setRating={setRating} rating={rating}/>
        </>
    )
}

export default withLayout(Home)
