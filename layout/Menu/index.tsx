import React, {useContext} from 'react'
import {AppContext} from '../../context/app.context'
import {FirstLevelMenuItem, PageItem} from '../../interfaces/menu.interface'
import styles from './Menu.module.css'
import classNames from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {firstLevelMenu} from '../../helpers'

export const Menu = (): JSX.Element => {
    const {menu, firstCategory, setMenu} = useContext(AppContext)
    const router = useRouter()
    const setSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(menuItem => {
            if (menuItem._id.secondCategory === secondCategory) {
                menuItem.opened = !menuItem.opened
            }
            return menuItem
        }))
    }
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(firstLevelMenu => (<div key={firstLevelMenu.route}>
                    <Link href={`/${firstLevelMenu.route}`}>
                        <a>
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
                {menu.map(m => {
                    if (m.pages.map(({alias}) => alias).includes(router.asPath.split('/')[2])) {
                        m.opened = true
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div onClick={() => setSecondLevel(m._id.secondCategory)}
                                 className={styles.secondLevel}>{m._id.secondCategory}</div>
                            <div className={classNames(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.opened
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <>
                {pages.map(page =>
                    <Link key={page._id} href={`/${route}/${page.alias}`}>
                        <a className={classNames(styles.thirdLevel, {
                            [styles.thirdLevelActive]: router.asPath.split('/')[2] === page.alias
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
        {buildFirstLevel()}
    </div>
}

