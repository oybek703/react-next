import React from 'react'
import {ReviewFormProps} from './ReviewForm.props'
import styles from './ReviewForm.module.css'
import {Input} from '../Input/Input'
import {Rating} from '../Rating/Rating'
import {TextArea} from '../TextArea/TextArea'
import {Button} from '../Button/Button'
import classNames from 'classnames'
import CloseIcon from './close.svg'

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    return <div className={classNames(styles.reviewForm, className)} {...props}>
        <Input placeholder='Имя'/>
        <Input className={styles.title} placeholder='Заголовок отзыва'/>
        <div className={styles.rating}>
            <span>Оценка:</span>
            <Rating rating={0}/>
        </div>
        <TextArea className={styles.description} placeholder='Текст отзыва'/>
        <div className={styles.submit}>
            <Button appereance='primary'>Отправить</Button>
            <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
        <div className={styles.success}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <span>
                Спасибо, ваш отзыв отзыв будет опубликован после проверки.
            </span>
            <CloseIcon className={styles.closeIcon}/>
        </div>
    </div>
}

