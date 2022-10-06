import type {GetStaticProps} from 'next'
import {Button, HTag, Input, PTag, Rating, Tag, TextArea} from '../components'
import {useState} from 'react'
import {withLayout} from '../layout'
import axios from 'axios'
import {MenuItem} from '../interfaces/menu.interface'
import {API} from '../helpers/api'

function Home({menu, firstCategory}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(3)
    return (
        <>
            <HTag tag="h3">This is HTag children</HTag>
            <Button arrow="right" appereance="primary">Click</Button>
            <Button arrow="down" appereance="ghost">Click</Button>
            <PTag size="small">Small</PTag>
            <PTag>Medium</PTag>
            <PTag size="large">Large</PTag>
            <Tag size="medium" color="grey">Ghost</Tag>
            <Tag>Ghost</Tag>
            <Tag color="red">Ghost</Tag>
            <Tag color="green">Ghost</Tag>
            <Tag size="small" color="primary">Ghost</Tag>
            <Rating editable setRating={setRating} rating={rating}/>
            <Input placeholder='Имя'/>
            <hr/>
            <TextArea placeholder='Текст отзыва'/>
        </>
    )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0
    const {data: menu} = await axios.post<MenuItem[]>(
        API.topPage.find,
        {firstCategory}
    )
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
}
