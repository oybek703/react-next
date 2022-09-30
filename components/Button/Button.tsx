import React from 'react'
import {ButtonProps} from './Button.props'
import styles from './Button.module.css'
import classNames from 'classnames'
import ArrowIcon from './arrow.svg'

export const Button = ({appereance, children, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
    return <button className={classNames(styles.button, className, {
        [styles.primary]: appereance === 'primary',
        [styles.ghost]: appereance === 'ghost'
    })} {...props}>
        {children}
        {arrow !== 'none' && <span className={classNames(styles.arrow, {
            [styles.down]: arrow === 'down'
        })}>
          <ArrowIcon/>
        </span>}
    </button>
}