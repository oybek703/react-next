import React, {ForwardedRef, forwardRef} from 'react'
import {TextAreaProps} from './TextArea.props'
import styles from './TextArea.module.css'
import classNames from 'classnames'

export const TextArea = forwardRef(({className, error, ...props}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={classNames(className, styles.textAreaWrapper)}>
            <textarea
                ref={ref}
                rows={5} cols={30}
                className={classNames(className, styles.textArea, {
                    [styles.error]: error
                })} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
})

TextArea.displayName = 'TextArea'
