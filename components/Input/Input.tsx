import React, {ForwardedRef, forwardRef} from 'react'
import {InputProps} from './Input.props'
import styles from './Input.module.css'
import classNames from 'classnames'

export const Input = forwardRef(({className, error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={styles.inputWrapper}>
            <input
                autoComplete='off'
                ref={ref}
                className={classNames(className, styles.input, {
                    [styles.error]: error
                })}
                {...props}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
})

Input.displayName = 'Input'
