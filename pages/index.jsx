import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import { getJokes } from './api/sentences'

export default function Home({ quote, name, bgColor }) {
    const reloadPage = () => {
        Router.reload(window.location.pathname)
    }

    const mainBgColor = {
        'background-color': bgColor
    }

    const mainTailwindCSS = (
        'flex flex-col items-center justify-center min-h-screen py-2 ' + `bg-gradient-to-r from-red-400 to-yellow-500`
    )
    return (
        <div className={mainTailwindCSS}>
            <Head>
                <title>Quote of the Request</title>
                <meta property="og:title" content='Quote of the Request' key='title' />
                <meta property="og:description" content='Quote of the Request by ssuniie' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className='flex items-center justify-end space-x-7 w-full h-12 mr-12 backdrop-blur-xl drop-shadow-lg'>
                <Link href='/about' ><a className='text-white hover:underline'>เกี่ยวกับ</a></Link>
                <Link href='/API' ><a className='text-white hover:underline'>สำหรับนักพัฒนา</a></Link>
                <button className='repo py-1 px-3 rounded-full bg-gray-100 hover:bg-gray-700 hover:text-white'>
                    <a href='https://forms.gle/utTM8Yqw8R4VVD4d8' rel="noopener noreferrer" target="_blank">
                        มีมุข หรือ คำคมที่เด็ด ๆ</a>
                </button>
            </header>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

                <h1 className='text-xl italic m-11 text-white drop-shadow-2xl'>Quote of the Request</h1>
                <h3 className='text-3xl font-bold m-11 text-white drop-shadow-2xl'>- “ {quote} ”</h3>
                <h3 className='text-lg font-light m-11 text-white drop-shadow-2xl'>โดย {name}</h3>
                <button className='repo py-4 px-5 bg-gray-100 hover:bg-gray-700 hover:text-white shadow-2xl backdrop-blur-xl rounded-full'
                    onClick={reloadPage}>Refresh</button>
            </main>

            <footer className="flex items-center justify-center w-full h-12 text-center text-white">
                <span>
                    <h6 className='font-medium drop-shadow-lg'>Made by Phatsanphon Nakaranurak (ssuniie)</h6>
                </span>
            </footer>
        </div>
    )
}

export async function getServerSideProps() {
    const req = await getJokes()
    const data = req[Math.floor(Math.random() * req.length)]

    const randomBgColor = '#ffff00'

    // console.log('Req' + data.name)

    const response = {
        quote: data.sentence,
        name: data.name,
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