import React from 'react'
import {HeaderProps} from './Header.props'
import classNames from 'classnames'
import styles from './Header.module.css'
import LogoIcon from '../logo.svg'
import {ButtonIcon} from '../../components'
import { motion } from 'framer-motion'
import {Sidebar} from '../Sidebar'

export const Header = ({ className, ...props}: HeaderProps): JSX.Element => {
    return <div className={classNames(className, styles.header)} {...props}>
        <LogoIcon/>
        <ButtonIcon appereance='white' icon='menu'/>
        <motion.div className={styles.mobileMenu}>
            <Sidebar/>
            <ButtonIcon className={styles.closeMenu} appereance='white' icon='close'/>
        </motion.div>
    </div>
}

