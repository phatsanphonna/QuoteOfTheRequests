import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import { getRandomJokes } from './api/jokes'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home({ quote, name, bgColor }) {
    const reloadPage = () => {
        Router.reload(window.location.pathname)
    }

    const mainTailwindCSS = (
        'flex flex-col items-center justify-center min-h-screen py-2 ' + `bg-gradient-to-r from-red-400 to-yellow-500`
    )
    return (
        <div className={mainTailwindCSS}>
            <Head>
                <title>Quote of the Request</title>
                <meta property="og:title" content='Quote of the Request' key='title' />
                <meta property="og:description" content='เว็บสุ่มมุข/คำคม โดย ซันนี่' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header indexPage={true} />

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className='text-white drop-shadow-2xl'>
                    <h3 className='text-xl italic m-11'>Quote of the Request</h3>
                    <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold m-11' style={{ lineHeight: '5rem' }}>
                        - “ {quote} ”</h1>
                    <h3 className='text-lg font-light'>โดย {name}</h3>
                </div>
                <div className="flex items-center justify-center m-11 space-x-10 text-sm">
                    <button className='repo py-4 px-7 bg-gray-100 hover:bg-gray-700 hover:text-white shadow-2xl backdrop-blur-xl rounded-full'
                        onClick={reloadPage}>ขอคำคมใหม่</button>
                    <Link href='/browse'><a>
                        <button className='repo py-4 px-7 bg-yellow-100 hover:bg-gray-700 hover:text-white shadow-2xl backdrop-blur-xl rounded-full'>หาคำคมเพิ่มเติม</button>
                    </a></Link>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const req = await getRandomJokes()
    const randomBgColor = '#ffff00'

    const response = {
        quote: req.sentence,
        name: req.name,
        bgColor: randomBgColor
    }

    if (!req) {
        return {
            notFound: true,
        }
    }

    return {
        props: response
    }
}