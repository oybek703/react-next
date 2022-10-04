import React from 'react'
import {HhDataProps} from './HhData.props'
import styles from './HhData.module.css'
import classNames from 'classnames'
import {Card} from '../Card/Card'
import RateIcon from './rateIcon.svg'
import {priceRu} from '../../helpers'

export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
    return <div className={classNames(styles.hh)}>
        <Card className={styles.count}>
            <div className={styles.title}>Всего вакансий</div>
            <div className={styles.countValue}>{
                count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            }</div>
        </Card>
        <Card className={styles.salary}>
            <div>
                <div className={styles.title}>Начальный</div>
                <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
                <div className={styles.rate}>
                    <RateIcon className={styles.filled}/>
                    <RateIcon/>
                    <RateIcon/>
                </div>
            </div>
            <div>
                <div className={styles.title}>Средний</div>
                <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
                <div className={styles.rate}>
                    <RateIcon className={styles.filled}/>
                    <RateIcon className={styles.filled}/>
                    <RateIcon/>
                </div>
            </div>
            <div>
                <div className={styles.title}>Профессионал</div>
                <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
                <div className={styles.rate}>
                    <RateIcon className={styles.filled}/>
                    <RateIcon className={styles.filled}/>
                    <RateIcon className={styles.filled}/>
                </div>
            </div>
        </Card>
    </div>
}

