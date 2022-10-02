import React, {useContext} from 'react'
import {AppContext} from '../../context/app.context'
import {FirstLevelMenuItem, PageItem} from '../../interfaces/menu.interface'
import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import BooksIcon from './icons/books.svg'
import ProductsIcon from './icons/products.svg'
import {TopLevelCategory} from '../../interfaces/page.interface'
import styles from './Menu.module.css'
import classNames from 'classnames'
import Link from 'next/link'

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Courses', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Services', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Books', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Products', icon: <ProductsIcon/>, id: TopLevelCategory.Products}


]

export const Menu = (): JSX.Element => {
    const {menu, firstCategory, setMenu} = useContext(AppContext)
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(firstLevelMenu => (<div key={firstLevelMenu.route}>
                    <Link href={`/${firstLevelMenu.route}`}>
                        <a >
                            <div className={classNames(styles.firstLevel, {
                                [styles.firstLevelActive]: firstLevelMenu.id === firstCategory
                            })}>
                                {firstLevelMenu.icon}
                                <span>{firstLevelMenu.name}</span>
                            </div>
                        </a>
                    </Link>
                    {firstLevelMenu.id === firstCategory && buildSecondLevel(firstLevelMenu)}
                </div>))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (<div key={m._id.secondCategory}>
                    <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                    <div className={classNames(styles.secondLevelBlock, {
                        [styles.secondLevelBlockOpened]: m.opened
                    })}>
                        {buildThirdLevel(m.pages, menuItem.route)}
                    </div>
                </div>))}
            </div>
        )
    }
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <>
                {pages.map(page =>
                    <Link key={page._id} href={`/${route}/${page.alias}`}>
                        <a className={classNames(styles.thirdLevel, {
                               [styles.thirdLevelActive]: false
                           })}>
                            {page.category}
                        </a>
                    </Link>
                )
                }
            </>
        )
    }
    return <div>
        <ul>
            {buildFirstLevel()}
        </ul>
    </div>
}
