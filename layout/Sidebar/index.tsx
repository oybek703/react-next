import React from 'react'
import {SidebarProps} from './Sidebar.props'
import classNames from 'classnames'
import {Menu} from '../Menu'
import styles from './Sidebar.module.css'
import LogoIcon from '../logo.svg'
import Link from 'next/link'
import {Search} from '../../components'

export const Sidebar = ({ className, ...props}: SidebarProps): JSX.Element => {
    return <div className={classNames(className, styles.sidebar)} {...props}>
        <Link href='/'>
            <a><LogoIcon className={styles.logo}/></a>
        </Link>
        <Search/>
        <Menu/>
    </div>
}

