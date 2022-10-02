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
                    <a href={`/${firstLevelMenu.route}`}>
                        <div className={classNames(styles.menu, {
                            [styles.firstLevelActive]: firstLevelMenu.id === firstCategory
                        })}>
                            {firstLevelMenu.icon}
                            <span>{firstLevelMenu.name}</span>
                        </div>
                    </a>
                    {firstLevelMenu.id === firstCategory && buildSecondLevel(firstLevelMenu)}
                </div>))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <>
                {menu.map(m => (<div key={m._id.secondCategory}>
                    <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                    <div className={classNames(styles.secondLevelBlock, {
                        [styles.secondLevelBlockOpened]: m.opened
                    })}>
                        {buildThirdLevel(m.pages, menuItem.route)}
                    </div>
                </div>))}
            </>
        )
    }
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <>
                {pages.map(page =>
                    <a key={page._id} href={`/${route}/${page.alias}`}
                       className={classNames(styles.thirdLevel, {
                           [styles.thirdLevelActive]: true
                       })}>
                        {page.category}
                    </a>)
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

