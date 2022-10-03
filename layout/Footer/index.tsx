import React from 'react'
import {FooterProps} from './Footer.props'
import classNames from 'classnames'
import styles from './Footer.module.css'
import {format} from 'date-fns'

export const Footer = ({children, className, ...props}: FooterProps): JSX.Element => {
    return <footer className={classNames(className, styles.footer)}>
        <div>
            YoTop © 2021 - {format(new Date(), 'yyyy')} Все права защищены
        </div>
        <a href='#' target='_blank'>
            Пользовательское соглашение
        </a>
        <a href='#' target='_blank'>
            Политика конфиденциальности
        </a>
    </footer>
}

