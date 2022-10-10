import React, {ForwardedRef, forwardRef, useRef, useState} from 'react'
import {ProductProps} from './Product.props'
import styles from './Product.module.css'
import classNames from 'classnames'
import {Card} from '../Card/Card'
import {Rating} from '../Rating/Rating'
import {Tag} from '../Tag/Tag'
import {Button} from '../Button/Button'
import {decOfNum, priceRu} from '../../helpers'
import {Divider} from '../Divider/Divider'
import Image from 'next/image'
import {Review} from '../Review/Review'
import {ReviewForm} from '../ReviewForm/ReviewForm'
import {motion} from 'framer-motion'

// eslint-disable-next-line react/display-name
export const Product = motion(forwardRef(({product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [reviewsOpen, setReviewsOpen] = useState<boolean>(false)

    const reviewRef = useRef<HTMLDivElement>(null)

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto'
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    }

    function handleScrollToReview() {
        setReviewsOpen(true)
        setTimeout(function () {
            reviewRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }, 0)
        reviewRef.current?.focus()
    }

    return (
        <div className={className} {...props} ref={ref}>
            <Card className={classNames(styles.product)}>
                <div className={styles.logo}>
                    <Image
                        width={70}
                        height={70}
                        src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
                        alt={product.title}/>
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    <span>{priceRu(product.price)}</span>
                    {product.oldPrice && <Tag color='green' size='small' className={styles.oldPrice}>
                        {priceRu(product.price - product.oldPrice)}
                    </Tag>}
                </div>
                <div className={styles.credit}>
                    {priceRu(product.credit)}/<span className={styles.month}>мес</span>
                </div>
                <div className={styles.rating}>
                    <Rating rating={product.reviewAvg ?? product.initialRating}/>
                </div>
                <div className={styles.tags}>
                    {product.categories.map(category => <Tag size='small' key={category} color='ghost'>{category}</Tag>)}
                </div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>
                    <a href='#' tabIndex={0} onClick={handleScrollToReview}>
                        {product.reviewCount} &nbsp;
                        {decOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </a>
                </div>
                <Divider className={styles.hr}/>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(characteristic => (<div
                        key={characteristic.name} className={styles.characteristics}>
                        <span className={styles.characteristicsName}>{characteristic.name}</span>
                        <span className={styles.characteristicsDots}/>
                        <span className={styles.characteristicsValue}>{characteristic.value}</span>
                    </div>))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                      <div className={styles.advTitle}>Преимущества</div>
                      <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                      <div className={styles.advTitle}>Недостатки</div>
                      <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={classNames(styles.hr, styles.hr2)}/>
                <div className={styles.actions}>
                    <Button appereance='primary'>Узнать подробнее</Button>
                    <Button appereance='ghost'
                            arrow={reviewsOpen ? 'down' : 'right'}
                            className={styles.reviewButton}
                            onClick={() => setReviewsOpen(!reviewsOpen)}>
                        Читать отзывы
                    </Button>
                </div>
            </Card>
            <motion.div variants={variants} initial='hidden' animate={reviewsOpen ? 'visible': 'hidden'}>
                <Card ref={reviewRef} color='blue' className={styles.reviews} tabIndex={0}>
                    {product.reviews.map(review => <div key={review._id}>
                        <Review review={review}/>
                        <Divider/>
                    </div>)}
                    <ReviewForm productId={product._id}/>
                </Card>
            </motion.div>
        </div>
    )
}))

Product.displayName = 'Product'

