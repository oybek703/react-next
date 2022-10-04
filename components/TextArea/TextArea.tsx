import React from 'react'
import {TextAreaProps} from './TextArea.props'
import styles from './TextArea.module.css'
import classNames from 'classnames'

export const TextArea = ({className, ...props}: TextAreaProps): JSX.Element => {
    return (
        <textarea placeholder='Текст отзыва'
                  rows={5} cols={30}
                  className={classNames(className, styles.textArea)} {...props}/>
    )
}

