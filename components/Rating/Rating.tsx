import React, {Fragment, useEffect, useState, KeyboardEvent} from 'react'
import {RatingProps} from './Rating.props'
import StarIcon from './star.svg'
import styles from './Rating.module.css'
import classNames from 'classnames'

export const Rating = ({editable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(Array(5).fill(<Fragment/>))

    function constructRating(currentRating: number) {
        const updatedArray = ratingArray.map((element, index) => {
            return <span key={index}
                         className={classNames(styles.star, {
                             [styles.filled]: index < currentRating,
                             [styles.editable]: editable
                         })}
                         onMouseEnter={() => changeDisplay(index + 1)}
                         onMouseLeave={() => changeDisplay(rating)}
                         onClick={() => handleClick(index + 1)}>
                <StarIcon tabIndex={editable ? 0 : -1} onKeyDown={event => handleKeyDown(event, index + 1)} />
            </span>
        })
        setRatingArray(updatedArray)
    }

    function changeDisplay(index: number) {
        if (!editable) return
        constructRating(index)
    }

    function handleClick(newIndex: number) {
        if (!editable || !setRating) return
        setRating(newIndex)
    }

    function handleKeyDown(event: KeyboardEvent<SVGElement>, index: number) {
        if (event.code !== 'Space' || !setRating) return
        setRating(index)
    }

    useEffect(function () {
        constructRating(rating)
    }, [rating])
    return <div {...props}>
        {ratingArray.map((r, index) => <span key={index}>{r}</span>)}
    </div>
}
