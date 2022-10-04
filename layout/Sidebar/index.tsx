import React from 'react'
import {SidebarProps} from './Sidebar.props'
import classNames from 'classnames'
import {Menu} from '../Menu'
import styles from './Sidebar.module.css'
import Logo from '../logo.svg'
import Link from 'next/link'

export const Sidebar = ({ className, ...props}: SidebarProps): JSX.Element => {
    return <div className={classNames(className, styles.sidebar)} {...props}>
        <Link href='/'>
            <a><Logo className={styles.logo}/></a>
        </Link>
        <div>поиск</div>
        <Menu/>
    </div>
}

