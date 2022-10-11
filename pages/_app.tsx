import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Fragment} from 'react'
import Head from 'next/head'
import ym, {YMInitializer} from 'react-yandex-metrika'

function MyApp({Component, pageProps, router}: AppProps) {
    router.events && router.events.on('routeChangeComplete', function (url: string) {
        if (typeof window !== 'undefined') {
            ym('hit', url)
        }
    })
    return <Fragment>
        <Head>
            <title>YOTopC - informational App</title>
            <meta property='og:locale' content='ru_RU'/>
            <link rel="preconnect" href="https://mc.yandex.ru"/>
        </Head>
        <YMInitializer accounts={[]} options={{webvisor: true, defer: true}} version='2'    />
        <Component {...pageProps} />
    </Fragment>
}

export default MyApp
