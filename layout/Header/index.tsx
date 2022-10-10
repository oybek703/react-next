import React, {useEffect, useState} from 'react'
import {HeaderProps} from './Header.props'
import classNames from 'classnames'
import styles from './Header.module.css'
import LogoIcon from '../logo.svg'
import {ButtonIcon} from '../../components'
import {motion} from 'framer-motion'
import {Sidebar} from '../Sidebar'
import {useRouter} from 'next/router'

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    const [isMenuOpened, setIsMenuOpenedState] = useState<boolean>(false)
    const router = useRouter()
    console.log(router.pathname)
    useEffect(function () {
        handleMenuState()
    }, [router])

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    }

    function handleMenuState() {
        setIsMenuOpenedState(!isMenuOpened)
    }

    return <div className={classNames(className, styles.header)} {...props}>
        <LogoIcon/>
        <ButtonIcon
            onClick={handleMenuState}
            appereance="white"
            icon="menu"/>
        <motion.div variants={variants}
                    initial="closed"
                    animate={isMenuOpened ? 'opened' : 'closed'}
                    className={styles.mobileMenu}>
            <Sidebar/>
            <ButtonIcon
                onClick={handleMenuState}
                className={styles.closeMenu} appereance="white" icon="close"/>
        </motion.div>
    </div>
}

