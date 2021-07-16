import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

export default function Loading() {
    const mainDivTailwindCSS = (
        `flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200`
    )
    const mainTagTailwindCSS = (
        'flex flex-col items-center justify-center w-full flex-1 px-20 md:px-64 lg:px-82 xl:px-96 text-center text-white'
    )

    return (
        <div className={mainDivTailwindCSS}>
            <Head>
                <title>Quote of the Request | Loading</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={mainTagTailwindCSS}>
                <h1
                    className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold m-11 tracking-widest drop-shadow-2xl'>
                    404
                </h1>
            </main>
        </div>
    )
}
