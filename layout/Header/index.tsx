import React from 'react'
import {HeaderProps} from './Header.props'
import classNames from 'classnames'

export const Header = ({ children, className, ...props}: HeaderProps): JSX.Element => {
    return <div className={classNames(className)}>
        Header
    </div>
}

