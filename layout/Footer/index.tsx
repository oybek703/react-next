import React from 'react'
import {FooterProps} from './Footer.props'
import classNames from 'classnames'

export const Footer = ({ children, className, ...props}: FooterProps): JSX.Element => {
    return <div className={classNames(className)}>
        Footer
    </div>
}

