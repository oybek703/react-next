import type {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next'
import axios from 'axios'
import {withLayout} from '../../layout'
import {MenuItem} from '../../interfaces/menu.interface'
import {TopLevelCategory, TopPageModel} from '../../interfaces/page.interface'
import {ProductModel} from '../../interfaces/product.interface'
import {firstLevelMenu} from '../../helpers'
import {TopPage} from '../../pageComponents'
import {API} from '../../helpers/api'
import Head from 'next/head'

function Alias({products, firstCategory, page}: AliasProps): JSX.Element {
    return (
        <>
            <Head>
                <title>{page.metaTitle}</title>
                <meta name='description' content={page.metaDescription} key='description'/>
                <meta property='og:title' content={page.metaTitle}/>
                <meta property='og:description' content={page.metaDescription}/>
                <meta property='og:type' content='article'/>
            </Head>
            <TopPage firstCategory={firstCategory} page={page} products={products}/>
        </>
    )
}

export default withLayout(Alias)

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = []
    for (const firstLevelMenuItem of firstLevelMenu) {
        const {data: menu} = await axios.post<MenuItem[]>(
            API.topPage.find,
            {firstCategory: firstLevelMenuItem.id}
        )
        paths = paths.concat(menu.flatMap(m => m.pages.map(p => `/${firstLevelMenuItem.route}/${p.alias}`)))
    }
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<AliasProps> = async ({params}: GetStaticPropsContext) => {
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
    try {
        const {data: menu} = await axios.post<MenuItem[]>(
            API.topPage.find,
            {firstCategory: firstCategoryItem.id}
        )
        if (!menu.length) {
            return {
                notFound: true
            }
        }
        const {data: page} = await axios.get<TopPageModel>(
            `${API.topPage.byAlias}/${params.alias}`
        )
        const {data: products} = await axios.post<ProductModel[]>(
            API.product.find,
            {
                category: page.category,
                limit: 10
            }
        )
        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        }
    } catch {
        return {
            notFound: true
        }
    }
}

interface AliasProps extends Record<string, unknown> {
    firstCategory: TopLevelCategory
    menu: MenuItem[]
    page: TopPageModel
    products: ProductModel[]
}
