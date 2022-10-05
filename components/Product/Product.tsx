import React from 'react'
import {ProductProps} from './Product.props'
import styles from './Product.module.css'
import classNames from 'classnames'
import {Card} from '../Card/Card'
import {Rating} from '../Rating/Rating'
import {Tag} from '../Tag/Tag'
import {Button} from '../Button/Button'
import {priceRu} from '../../helpers'

export const Product = ({product}: ProductProps): JSX.Element => {
    return <Card className={classNames(styles.product)}>
        <div className={styles.logo}>
            <img
                src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
                alt={product.title}/>
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
            <span>{priceRu(product.price)}</span>
            {product.oldPrice && <Tag color='green' size='small' className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
        </div>
        <div className={styles.credit}>
            {priceRu(product.credit)}/<span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
            <Rating rating={product.reviewAvg ?? product.initialRating}/>
        </div>
        <div className={styles.tags}>
            {product.categories.map(category => <Tag size='small' key={category} color="ghost">{category}</Tag>)}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>кредит</div>
        <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
        <div className={styles.hr}>
            <hr/>
        </div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>фичи</div>
        <div className={styles.advBlock}>
            <div className={styles.advantages}>
                <div>Преимущества</div>
                <div>{product.advantages}</div>
            </div>
            <div className={styles.disadvantages}>
                <div>Недостатки</div>
                <div>{product.disadvantages}</div>
            </div>
        </div>
        <div className={styles.hr}>
            <hr/>
        </div>
        <div className={styles.actions}>
            <Button appereance="primary">Узнать подробнее</Button>
            <Button appereance="ghost" arrow="right">Читать отзывы</Button>
        </div>
    </Card>
}

