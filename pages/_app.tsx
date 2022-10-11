import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Fragment} from 'react'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
    return <Fragment>
        <Head>
            <title>YOTopC - informational App</title>
            <meta property='og:locale' content='ru_RU'/>
        </Head>
        <Component {...pageProps} />
    </Fragment>
}

export default MyApp
