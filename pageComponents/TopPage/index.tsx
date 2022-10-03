import React from 'react'
import {TopPageProps} from './TopPage.props'
import styles from './TopPage.module.css'
import {HhData, HTag, Tag} from '../../components'

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
            <HTag tag={'h2'}>Вакансии - {page.category}</HTag>
            <Tag color="red">hh.ru</Tag>
        </div>
        <HhData {...page.hh} />
    </div>
}

