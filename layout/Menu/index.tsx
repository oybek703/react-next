import React, {useContext, KeyboardEvent} from 'react'
import {AppContext} from '../../context/app.context'
import {FirstLevelMenuItem, PageItem} from '../../interfaces/menu.interface'
import styles from './Menu.module.css'
import classNames from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {firstLevelMenu} from '../../helpers'
import {motion} from 'framer-motion'

export const Menu = (): JSX.Element => {
    const {menu, firstCategory, setMenu} = useContext(AppContext)
    const router = useRouter()
    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1

            }
        },
        hidden: {
            marginBottom: 0
        }
    }
    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 'auto'
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    }
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

    const handleSecondLevelKeyDown = (event: KeyboardEvent<HTMLDivElement>, secondCategory: string) => {
        if (event.code === 'Space' || event.code === 'Enter') {
            event.preventDefault()
            setSecondLevel(secondCategory)
        }
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
                            <div tabIndex={0}
                                 onKeyDown={
                                     (event) => handleSecondLevelKeyDown(event, m._id.secondCategory)
                                 }
                                 onClick={() => setSecondLevel(m._id.secondCategory)}
                                 className={styles.secondLevel}>{m._id.secondCategory}</div>
                            <motion.div className={classNames(styles.secondLevelBlock)}
                                        variants={variants}
                                        initial={m.opened ? 'visible' : 'hidden'}
                                        animate={m.opened ? 'visible' : 'hidden'} layout>
                                {buildThirdLevel(m.pages, menuItem.route, m.opened ?? false)}
                            </motion.div>
                        </div>
                    )
                })}
            </div>
        )
    }
    const buildThirdLevel = (pages: PageItem[], route: string, isRouteOpen: boolean) => {
        return (
            <>
                {pages.map(page =>
                    <motion.div variants={variantsChildren} key={page._id}>
                        <Link href={`/${route}/${page.alias}`}>
                            <a tabIndex={isRouteOpen ? 0 : -1} className={classNames(styles.thirdLevel, {
                                [styles.thirdLevelActive]: router.asPath.split('/')[2] === page.alias
                            })}>
                                {page.category}
                            </a>
                        </Link>
                    </motion.div>
                )
                }
            </>
        )
    }
    return <div>
        {buildFirstLevel()}
    </div>
}

