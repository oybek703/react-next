import React, {FunctionComponent} from 'react'
import {LayoutProps} from './Layout.props'
import {Header} from '../Header'
import {Sidebar} from '../Sidebar'
import {Footer} from '../Footer'

const Layout = ({children}: LayoutProps): JSX.Element => {
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

export function withLayout<T extends Record<string, unknown>>(Component: FunctionComponent<T>) {
    return function WithLayoutWrapper(props: T): JSX.Element {
        return <Layout>
            <Component {...props} />
        </Layout>
    }
}

