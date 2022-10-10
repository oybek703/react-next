import React, {KeyboardEvent} from 'react'
import {SortEnum, SortProps} from './Sort.props'
import styles from './Sort.module.css'
import classNames from 'classnames'
import SortIcon from './sort.svg'

export const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {

    function handleSortKeyDown(event: KeyboardEvent<HTMLSpanElement>, rating: SortEnum) {
        if (event.code === 'Space') event.preventDefault()
        setSort(rating)
    }

    return <div className={classNames(styles.sort, className)} {...props}>
        <span tabIndex={0}
              onClick={() => setSort(SortEnum.Rating)}
              onKeyDown={(event) => handleSortKeyDown(event, SortEnum.Rating)}
              className={classNames({
            [styles.active]: sort === SortEnum.Rating
        })}>
            <SortIcon className={styles.sortIcon}/>По рейтингу
        </span>
        <span tabIndex={0}
              onClick={() => setSort(SortEnum.Price)}
              onKeyDown={(event) => handleSortKeyDown(event, SortEnum.Price)}
              className={classNames({
            [styles.active]: sort === SortEnum.Price
        })}>
            <SortIcon className={styles.sortIcon}/>По цене
        </span>
    </div>
}
