import React from 'react'
import {ButtonIconProps, icons} from './ButtonIcon.props'
import styles from './ButtonIcon.module.css'
import classNames from 'classnames'

export const ButtonIcon = ({appereance, icon, className, ...props}: ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon]
    return <button className={classNames(styles.button, className, {
        [styles.primary]: appereance === 'primary',
        [styles.white]: appereance === 'white'
    })} {...props}>
        <IconComp/>
    </button>
}
