import React from 'react'
import {PTagProps} from './PTag.props'
import styles from './PTag.module.css'
import classNames from 'classnames'

const HTag = ({size, children}: PTagProps): JSX.Element => {
    return <p className={classNames(styles.p)}>{children}</p>
}

export default HTag
