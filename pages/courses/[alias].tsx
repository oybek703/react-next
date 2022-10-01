import type {GetStaticProps} from 'next'
import {useState} from 'react'
import axios from 'axios'
import {Button, HTag, PTag, Rating, Tag} from '../../components'
import {withLayout} from '../../layout'
import {MenuItem} from '../../interfaces/menu.interface'

function Course({menu, firstCategory}: CourseProps): JSX.Element {
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
            <ul>
                {menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
            </ul>
        </>
    )
}

export default withLayout(Course)

export const getStaticProps: GetStaticProps<CourseProps> = async () => {
    const firstCategory = 0

    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {
        firstCategory
    })
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface CourseProps extends Record<string, unknown>{
    menu: MenuItem[]
    firstCategory: number
}
