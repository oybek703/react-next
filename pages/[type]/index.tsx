import type {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next'
import axios from 'axios'
import {withLayout} from '../../layout'
import {MenuItem} from '../../interfaces/menu.interface'
import {TopLevelCategory} from '../../interfaces/page.interface'
import {firstLevelMenu} from '../../helpers'
import {API} from '../../helpers/api'

function Type({firstCategory}: TypeProps): JSX.Element {
    return (
        <>
            TYPE {firstCategory}
        </>
    )
}

export default withLayout(Type)

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(({route}) => `/${route}`),
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext) => {
    if (!params) {
        return {
            notFound: true
        }
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
    if (!firstCategoryItem) {
        return {
            notFound: true
        }
    }
    const {data: menu} = await axios.post<MenuItem[]>(
        API.topPage.find,
        {firstCategory: firstCategoryItem.id}
    )
    if (!menu.length) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    }
}

interface TypeProps extends Record<string, unknown> {
    firstCategory: TopLevelCategory
    menu: MenuItem[]
}
