import React from 'react'
import {PTagProps} from './PTag.props'
import styles from './PTag.module.css'
import classNames from 'classnames'

const PTag = ({size = 'medium', children}: PTagProps): JSX.Element => {
    return <p className={classNames(styles.p, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large'
    })}>{children}</p>
}

export default PTag
