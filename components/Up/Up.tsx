import React, {useEffect} from 'react'
import styles from './Up.module.css'
import {useScrollY} from '../../hooks/useScrollY'
import {motion, useAnimation} from 'framer-motion'
import {ButtonIcon} from '../ButtonIcon/ButtonIcon'

export const Up = (): JSX.Element => {
    const controls = useAnimation()
    const y = useScrollY()

    useEffect(() => {
        const opacity = y / document.body.scrollHeight
        controls.set({
            opacity: opacity,
            display: opacity < 0.15 ? 'none' : 'inline-block'
        })
    }, [y, controls])

    function handleScrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return <motion.div
        className={styles.up}
        animate={controls}
        initial={'hidden'}>
        <ButtonIcon onClick={handleScrollToTop} appereance='primary' icon='up'/>
    </motion.div>
}

