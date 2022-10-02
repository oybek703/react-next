import React, {createContext, PropsWithChildren, useState} from 'react'
import {MenuItem} from '../interfaces/menu.interface'
import {TopLevelCategory} from '../interfaces/page.interface'

export interface IAppContext {
    menu: MenuItem[]
    firstCategory: TopLevelCategory
    setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({
    menu: [],
    firstCategory: TopLevelCategory.Courses
})

export const AppContextProvider = ({children, menu, firstCategory}: PropsWithChildren<IAppContext>): JSX.Element => {
    const [menuState, setManuState] = useState<MenuItem[]>(menu)
    const setMenu = (newMenu: MenuItem[]) => {
        setManuState(newMenu)
    }
    return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
        {children}
    </AppContext.Provider>
}
