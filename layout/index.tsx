import React, {FunctionComponent, useState, KeyboardEvent, useRef} from 'react'
import {LayoutProps} from './Layout.props'
import {Header} from './Header'
import {Sidebar} from './Sidebar'
import {Footer} from './Footer'
import styles from './Layout.module.css'
import {AppContextProvider, IAppContext} from '../context/app.context'
import {Up} from '../components'
import classNames from 'classnames'

const Layout = ({children}: LayoutProps): JSX.Element => {
    const [skipLinkDisplay, setSkipLinkDisplay] = useState<boolean>(false)
    const bodyRef = useRef<HTMLDivElement>(null)
    function skipContentAction(event: KeyboardEvent<HTMLAnchorElement>) {
        if (event.code === 'Space' || event.code === 'Enter') {
            event.preventDefault()
            bodyRef.current?.focus()
        }
        setSkipLinkDisplay(false)
    }

    return <div className={styles.wrapper}>
        <a tabIndex={1}
           onFocus={() => setSkipLinkDisplay(true)}
           onKeyDown={skipContentAction}
           className={classNames(styles.skipLink, {
               [styles.skipLinkDisplay]: skipLinkDisplay
           })}>Сразу к содержанию</a>
        <Header className={styles.header}/>
        <Sidebar className={styles.sidebar}/>
        <div className={styles.body} ref={bodyRef} tabIndex={0}>
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

