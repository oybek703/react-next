import React from 'react'
import {SidebarProps} from './Sidebar.props'
import classNames from 'classnames'

export const Sidebar = ({ children, className, ...props}: SidebarProps): JSX.Element => {
    return <div className={classNames(className)}>
        Sidebar
    </div>
}

