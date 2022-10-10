import React, {useState} from 'react'
import {ReviewFormProps} from './ReviewForm.props'
import styles from './ReviewForm.module.css'
import {Input} from '../Input/Input'
import {Rating} from '../Rating/Rating'
import {TextArea} from '../TextArea/TextArea'
import {Button} from '../Button/Button'
import classNames from 'classnames'
import CloseIcon from './close.svg'
import {useForm, Controller} from 'react-hook-form'
import {IReviewForm, IReviewResponse} from './ReviewForm.interface'
import axios from 'axios'
import {API} from '../../helpers/api'

export const ReviewForm = ({productId, className, isOpened, ...props}: ReviewFormProps): JSX.Element => {
    const {control, register, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>()
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    async function handleFormSubmit(formData: IReviewForm) {
        try {
            const {data} = await axios.post<IReviewResponse>(API.review.createDemo, {...formData, productId})
            console.log(data)
            if (data.message) {
                console.log(data)
                setSuccess(true)
                reset()
            } else {
                setError('Что то пошло не так!')
            }
        } catch (e: any) {
            console.log(e)
            setError(e.message)
        }
    }

    return <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={classNames(styles.reviewForm, className)} {...props}>
            <Input
                error={errors.name}
                {...register('name', {required: {value: true, message: 'Заполните имя!'}})}
                tabIndex={isOpened ? 0 : -1}
                placeholder='Имя'/>
            <Input
                error={errors.title}
                {...register('title', {required: {value: true, message: 'Заполните заголовок!'}})}
                className={styles.title}
                tabIndex={isOpened ? 0 : -1}
                placeholder='Заголовок отзыва'/>
            <div className={styles.rating}>
                <span>Оценка:</span>
                <Controller
                    control={control}
                    rules={{required: {value: true, message: 'Выберите рейтинг!'}}}
                    render={({field: {value, onChange, ref}}) =>
                        <Rating rating={value}
                                ref={ref}
                                tabIndex={isOpened ? 0 : -1}
                                error={errors.rating}
                                editable setRating={onChange}/>}
                    name='rating'/>
            </div>
            <TextArea error={errors.description}
                      tabIndex={isOpened ? 0 : -1}
                      {...register('description', {required: {value: true, message: 'Заполните описание!'}})}
                      className={styles.description}
                      placeholder='Текст отзыва'/>
            <div className={styles.submit}>
                <Button appereance='primary' tabIndex={isOpened ? 0 : -1}>Отправить</Button>
                <span
                    className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
            {success && <div className={classNames(styles.success, styles.panel)}>
              <div className={styles.successTitle}>Ваш отзыв отправлен</div>
              <span>
                Спасибо, ваш отзыв отзыв будет опубликован после проверки.
            </span>
              <CloseIcon onClick={() => setSuccess(false)} className={styles.closeIcon}/>
            </div>}
            {error && <div className={classNames(styles.error, styles.panel)}>
              <div className={styles.errorTitle}>Ошибка!</div>
              <span>
                {error}
            </span>
              <CloseIcon onClick={() => setError(undefined)} className={styles.closeIcon}/>
            </div>}
        </div>
    </form>
}

