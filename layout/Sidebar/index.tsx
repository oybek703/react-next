import React from 'react'
import {SidebarProps} from './Sidebar.props'
import classNames from 'classnames'
import {Menu} from '../Menu'

export const Sidebar = ({ children, className, ...props}: SidebarProps): JSX.Element => {
    return <div className={classNames(className)}>
        <Menu/>
    </div>
}

