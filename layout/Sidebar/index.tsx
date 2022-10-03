import React from 'react'
import {SidebarProps} from './Sidebar.props'
import classNames from 'classnames'
import {Menu} from '../Menu'
import styles from './Sidebar.module.css'
import Logo from '../logo.svg'

export const Sidebar = ({ className, ...props}: SidebarProps): JSX.Element => {
    return <div className={classNames(className, styles.sidebar)} {...props}>
        <Logo className={styles.logo}/>
        <div>поиск</div>
        <Menu/>
    </div>
}

