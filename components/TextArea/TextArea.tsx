import React, {ForwardedRef, forwardRef} from 'react'
import {TextAreaProps} from './TextArea.props'
import styles from './TextArea.module.css'
import classNames from 'classnames'

export const TextArea = forwardRef(({className, ...props}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <textarea
            ref={ref}
            rows={5} cols={30}
            className={classNames(className, styles.textArea)} {...props}/>
    )
})

TextArea.displayName = 'TextArea'
