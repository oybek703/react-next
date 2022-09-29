import React from 'react'
import {ButtonProps} from './Button.props'
import styles from './Button.module.css'
import classNames from 'classnames'

const Button = ({appereance, children, className, ...props}: ButtonProps): JSX.Element => {
    return <button className={classNames(styles.button, className, {
        [styles.primary]: appereance === 'primary',
        [styles.ghost]: appereance === 'ghost'
    })} {...props}>{children}</button>
}

export default Button
