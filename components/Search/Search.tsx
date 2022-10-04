import type {KeyboardEvent} from 'react'
import React, {useState} from 'react'
import {SearchProps} from './Search.props'
import styles from './Search.module.css'
import {Input} from '../Input/Input'
import {Button} from '../Button/Button'
import GlassIcon from './glass.svg'
import classNames from 'classnames'
import {useRouter} from 'next/router'

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
    const [searchText, setSearchText] = useState<string>('')
    const router = useRouter()
    function navigateToSearch() {
        router.push({
            pathname: '/search',
            query: {
                q: searchText
            }
        })
    }

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') navigateToSearch()
    }

    return (
        <div className={classNames(className, styles.search)} {...props}>
            <Input value={searchText}
                   onKeyDown={handleKeyDown}
                   onChange={({target: {value}}) => setSearchText(value)}
                   placeholder="Поиск..."/>
            <Button onClick={navigateToSearch} className={styles.icon} appereance="primary">
                <GlassIcon/>
            </Button>
        </div>
    )
}

