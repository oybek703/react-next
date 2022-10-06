import React from 'react'
import {ReviewFormProps} from './ReviewForm.props'
import styles from './ReviewForm.module.css'
import {Input} from '../Input/Input'
import {Rating} from '../Rating/Rating'
import {TextArea} from '../TextArea/TextArea'
import {Button} from '../Button/Button'
import classNames from 'classnames'
import CloseIcon from './close.svg'
import {useForm, Controller} from 'react-hook-form'
import {IReviewForm} from './ReviewForm.interface'

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
    const {control, register, handleSubmit, formState: {errors}} = useForm<IReviewForm>()

    function handleFormSubmit(data: IReviewForm) {
        console.log(data)
    }

    return <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={classNames(styles.reviewForm, className)} {...props}>
            <Input
                error={errors.name}
                {...register('name', {required: {value: true, message: 'Заполните имя!'}})}
                placeholder="Имя"/>
            <Input
                error={errors.title}
                {...register('title', {required: {value: true, message: 'Заполните заголовок!'}})}
                className={styles.title}
                placeholder="Заголовок отзыва"/>
            <div className={styles.rating}>
                <span>Оценка:</span>
                <Controller
                    control={control}
                    rules={{required: {value: true, message: 'Выберите рейтинг!'}}}
                    render={({field: {value, onChange, ref}}) =>
                        <Rating rating={value}
                                ref={ref}
                                error={errors.rating}
                                editable setRating={onChange}/>}
                    name="rating"/>
            </div>
            <TextArea error={errors.description}
                      {...register('description', {required: {value: true, message: 'Заполните описание!'}})}
                      className={styles.description}
                      placeholder="Текст отзыва"/>
            <div className={styles.submit}>
                <Button appereance="primary">Отправить</Button>
                <span
                    className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <span>
                Спасибо, ваш отзыв отзыв будет опубликован после проверки.
            </span>
                <CloseIcon className={styles.closeIcon}/>
            </div>
        </div>
    </form>
}

