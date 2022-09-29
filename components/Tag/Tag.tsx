import React from 'react'
import {TagProps} from './Tag.props'
import styles from './Tag.module.css'
import classNames from 'classnames'

export const Tag = ({size = 'medium', color='ghost', className, children, ...props}: TagProps): JSX.Element => {
    return <p className={classNames(styles.tag, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary'
    })} {...props}>
        {children}
    </p>
}

