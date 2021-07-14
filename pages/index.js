import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import { getJokes } from './api/sentences'

export default function Home({ sentence, name }) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Quote of the Request</title>
                <meta property="og:title" content='Quote of the Request' key='title' />
                <meta property="og:description" content='Quote of the Request by ssuniie' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
            </header>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className='text-xl italic m-11'>มุขจิปาถะ of request</h1>
                <h3 className='text-3xl font-bold m-11'>- “ {sentence} ”</h3>
                <h3 className='text-lg font-light m-11'>โดย {name}</h3>
                <button>Refresh</button>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <div>Made by Phatsanphon Nakaranurak</div>
                <br />
                <div><Link href='/API'><a>API</a></Link></div>
            </footer>
        </div>
    )
}

export async function getServerSideProps() {
    const req = await getJokes()
    // console.log(req)
    const data = req[Math.floor(Math.random() * req.length)]

    // console.log('Req' + data.name)

    if (!req) {
        return {
            notFound: true,
        }
    }

    return {
        props: data
    }
}