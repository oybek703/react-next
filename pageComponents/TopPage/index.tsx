import React, {useReducer} from 'react'
import {TopPageProps} from './TopPage.props'
import styles from './TopPage.module.css'
import {Advantages, HhData, HTag, Sort, Tag} from '../../components'
import {TopLevelCategory} from '../../interfaces/page.interface'
import {SortEnum} from '../../components/Sort/Sort.props'
import {sortReducer} from '../../components/Sort/sortReducer'

export const TopPage = ({products, page, firstCategory}: TopPageProps): JSX.Element => {
    const [{sort, products: sortedProducts}, dispatchSort] = useReducer(
        sortReducer,
        {
            sort: SortEnum.Rating,
            products: products.sort((a, b) => b.initialRating - a.initialRating)
        }
    )
    function setSort(sort: SortEnum) {
        dispatchSort({type: sort})
    }
    return <div className={styles.wrapper}>
        <div className={styles.title}>
            <HTag tag={'h1'}>{page.title}</HTag>
            <Tag size="medium" color="grey">{products?.length}</Tag>
            <Sort sort={sort} setSort={setSort}/>
            <div>
                {sortedProducts?.map(p => <div key={p._id}>{p.title}</div>)}
            </div>
        </div>
        <div className={styles.hhTitle}>
            <HTag tag='h2'>Вакансии - {page.category}</HTag>
            <Tag color="red">hh.ru</Tag>
        </div>
        {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
        {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages}/>}
        {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
        <HTag tag='h2'>Получаемые навыки</HTag>
        {page.tags.map(tag => <Tag color='primary' key={tag}>{tag}</Tag>)}
    </div>
}

