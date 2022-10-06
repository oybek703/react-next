import React, {ForwardedRef, forwardRef} from 'react'
import {InputProps} from './Input.props'
import styles from './Input.module.css'
import classNames from 'classnames'

export const Input = forwardRef(({className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <input
            ref={ref}
            className={classNames(className, styles.input)}
            {...props}
        />
    )
})

Input.displayName = 'Input'
