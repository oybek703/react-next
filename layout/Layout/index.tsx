import React from 'react'
import {LayoutProps} from './Layout.props'
import {Header} from '../Header'
import {Sidebar} from '../Sidebar'
import {Footer} from '../Footer'

export const Layout = ({children}: LayoutProps): JSX.Element => {
    return <>
        <Header/>
        <div>
            <Sidebar/>
            <div>
                {children}
            </div>
        </div>
        <Footer/>
    </>
}

