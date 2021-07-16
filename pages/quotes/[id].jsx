import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getJokes, getAllJokes } from '../api/jokes'
import { randomGradientBackground } from '../../utils/randomGradientBG'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import QuoteInfoCards from '../../components/QuoteInfoCard'
import Loading from '../../components/Loading'

export default function PostId({ quote, quoteId, name, category, bgColor }) {
    const mainDivTailwindCSS = (
        `flex flex-col items-center justify-center min-h-screen py-2 ${bgColor}`
    )
    const mainTagTailwindCSS = (
        'flex flex-col items-center justify-center w-full flex-1 px-20 md:px-64 lg:px-82 xl:px-96 text-center text-white'
    )
    const router = useRouter();

    if (router.isFallback) {
        return <Loading />
    }

    return (
        <div className={mainDivTailwindCSS}>
            <Head>
                <title>Quote of the Request | {quoteId}</title>
                <meta property="og:title" content={`${quote} | Quote of the Request`} key='title' />
                <meta property="og:description" content='เว็บสุ่มมุข/คำคม โดย ซันนี่' />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={mainTagTailwindCSS}>
                <QuoteInfoCards quote={quote} quoteId={quoteId} name={name} category={category} />
            </main>

            <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    const allPosts = await getAllJokes()
    const possiblePaths = allPosts.map((quote) => {
        // console.log('Possible Paths ' + quote.sentenceId)
        return { params: { id: `${quote.sentenceId}` } }
    })
    return {
        paths: possiblePaths,
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    const req = await getJokes(params.id)
    // console.log('Req: ' + req.sentence)
    // const randomBgColor = randomGradientBackground()
    const randomBgColor = 'bg-gradient-to-r from-red-200 via-red-300 to-yellow-200'

    const response = {
        quote: req.sentence,
        quoteId: req.sentenceId,
        name: req.name,
        category: req.category,
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