import React from 'react'
import {AdvantagesProps} from './Advantages.props'
import styles from './Advantages.module.css'
import {HTag} from '../HTag/HTag'
import CheckIcon from './check.svg'

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            <HTag tag="h2">Преимущества</HTag>
            {advantages.map(advantage => <div className={styles.advantage} key={advantage._id}>
                <CheckIcon/>
                <div className={styles.title}>{advantage.title}</div>
                <hr className={styles.vline}/>
                <div>{advantage.description}</div>
            </div>)}
        </>
    )
}

