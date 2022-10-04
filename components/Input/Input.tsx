import React from 'react'
import {InputProps} from './Input.props'
import styles from './Input.module.css'
import classNames from 'classnames'

export const Input = ({className, ...props}: InputProps): JSX.Element => {
    return (
        <input placeholder='Имя'
            type="text"
               className={classNames(className, styles.input)} {...props}/>
    )
}

