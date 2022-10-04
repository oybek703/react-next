import React from 'react'
import {TopPageProps} from './TopPage.props'
import styles from './TopPage.module.css'
import {Advantages, HhData, HTag, Tag} from '../../components'
import {TopLevelCategory} from '../../interfaces/page.interface'

export const TopPage = ({products, page, firstCategory}: TopPageProps): JSX.Element => {
    return <div className={styles.wrapper}>
        <div className={styles.title}>
            <HTag tag={'h1'}>{page.title}</HTag>
            <Tag size="medium" color="grey">{products?.length}</Tag>
            <span>Сортировка</span>
            <div>
                {products?.map(p => <div key={p._id}>{p.title}</div>)}
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

