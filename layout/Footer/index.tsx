import React from 'react'
import {FooterProps} from './Footer.props'
import classNames from 'classnames'
import styles from './Footer.module.css'
import { format } from 'date-fns'

export const Footer = ({ children, className, ...props}: FooterProps): JSX.Element => {
    return <div className={classNames(className, styles.footer)}>
        <p className="copyright">
            OwlTop © 2021 - {format(new Date(), 'yyyy')} Все права защищены
        </p>
        <p className="agreement">
            Пользовательское соглашение
        </p>
        <p className="terms">
            Политика конфиденциальности
        </p>
    </div>
}

