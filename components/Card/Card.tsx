import React, {ForwardedRef, forwardRef} from 'react'
import {CardProps} from './Card.props'
import styles from './Card.module.css'
import classNames from 'classnames'
import { motion } from 'framer-motion'

export const Card = motion(forwardRef(({color, children, className, ...props}: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return <div ref={ref} className={classNames(styles.card, className,  {
        [styles.blue]: color === 'blue'
    })} {...props}>
        {children}
    </div>
}))

Card.displayName = 'Card'
