import React, {Fragment, useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef} from 'react'
import {RatingProps} from './Rating.props'
import StarIcon from './star.svg'
import styles from './Rating.module.css'
import classNames from 'classnames'

export const Rating = forwardRef(({editable = false, rating, setRating, error, tabIndex, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(Array(5).fill(<Fragment/>))
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([])

    function constructRating(currentRating: number) {
        const updatedArray = ratingArray.map((element, index) => {
            return <span key={index}
                         className={classNames(styles.star, {
                             [styles.filled]: index < currentRating,
                             [styles.editable]: editable
                         })}
                         onMouseEnter={() => changeDisplay(index + 1)}
                         onMouseLeave={() => changeDisplay(rating)}
                         onClick={() => handleClick(index + 1)}
                         tabIndex={computeFocus(rating, index)}
                         onKeyDown={handleKeyDown}
                         ref={ref => ratingArrayRef.current.push(ref)}>
                <StarIcon />
            </span>
        })
        setRatingArray(updatedArray)
    }

    function computeFocus(rating: number, index: number): number {
        if (!editable) return -1
        if (!rating && index === 0) return tabIndex ?? 0
        if (rating === index + 1) return tabIndex ?? 0
        return -1
    }

    function changeDisplay(index: number) {
        if (!editable) return
        constructRating(index)
    }

    function handleClick(newIndex: number) {
        if (!editable || !setRating) return
        setRating(newIndex)
    }

    function handleKeyDown(event: KeyboardEvent<HTMLSpanElement>) {
        if (!setRating) return
        if (event.code === 'ArrowRight' || event.code === 'ArrowUp') {
            event.preventDefault()
            if (!rating) {
                setRating(1)
            }
            else {
                setRating(rating < 5 ? rating + 1 : 5)
            }
            ratingArrayRef.current[rating]?.focus()
        }
        if (event.code === 'ArrowLeft' || event.code === 'ArrowDown') {
            event.preventDefault()
            if (!rating) {
                setRating(1)
            } else {
                setRating(rating > 1 ? rating - 1 : 1)
            }
            ratingArrayRef.current[rating - 2]?.focus()
        }
    }

    useEffect(function () {
        constructRating(rating)
    }, [rating, tabIndex])

    return <div {...props} ref={ref} className={classNames(styles.ratingWrapper, {[styles.error]: error})}>
        {ratingArray.map((r, index) => <span key={index}>{r}</span>)}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
})

Rating.displayName = 'Rating'
