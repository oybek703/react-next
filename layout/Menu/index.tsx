import React, {useContext} from 'react'
import {AppContext} from '../../context/app.context'

export const Menu = (): JSX.Element => {
    const {menu, firstCategory, setMenu} = useContext(AppContext)
    return <div>
        <ul>
            {menu.map(item => <li key={item._id.secondCategory}>{item._id.secondCategory}</li>)}
        </ul>
    </div>
}

