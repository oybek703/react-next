import React from 'react'
import {PTagProps} from './PTag.props'
import styles from './PTag.module.css'
import classNames from 'classnames'

export const PTag = ({size = 'medium', className, children, ...props}: PTagProps): JSX.Element => {
    return <p className={classNames(styles.p, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large'
    })} {...props}>
        {children}
    </p>
}

