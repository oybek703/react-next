import React from 'react'
import {TopPageProps} from './TopPage.props'
import styles from './TopPage.module.css'

export const TopPage = ({products, menu, firstCategory}: TopPageProps): JSX.Element => {
    return <div>
        {products.length}
    </div>
}

