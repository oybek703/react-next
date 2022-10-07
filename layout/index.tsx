import React, {FunctionComponent} from 'react'
import {LayoutProps} from './Layout.props'
import {Header} from './Header'
import {Sidebar} from './Sidebar'
import {Footer} from './Footer'
import styles from './Layout.module.css'
import {AppContextProvider, IAppContext} from '../context/app.context'
import {Up} from '../components'

const Layout = ({children}: LayoutProps): JSX.Element => {
    return <div className={styles.wrapper}>
        <Header className={styles.header}/>
        <Sidebar className={styles.sidebar}/>
        <div className={styles.body}>
            {children}
        </div>
        <Up/>
        <Footer className={styles.footer}/>
    </div>
}

export function withLayout<T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) {
    return function WithLayoutWrapper(props: T): JSX.Element {
        return <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props} />
            </Layout>
        </AppContextProvider>
    }
}

