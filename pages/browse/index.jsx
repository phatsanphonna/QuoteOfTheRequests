import { useState, useEffect } from 'react'
import Link from 'next/link'

import InfiniteScroll from 'react-infinite-scroll-component'

import { getAllJokes, getLimitJokes } from '@utils/databaseQuery/findData'

import LongQuoteInfoCard from '@components/LongQuoteInfoCard'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function index({ data, getTotalQuotes }) {
  try {
    const mainTailwindCSS = (
      `flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-indigo-300 to-purple-400 space-y-5`
    )
    const mainTagTailwindCSS = (
      'flex flex-col items-center justify-center w-full flex-1 md:px-64 lg:px-80'
    )

    const [quotes, setQuotes] = useState(data)
    const [hasMore, setHasMore] = useState(true)

    const getMoreQuotes = async () => {
      // console.log(getTotalQuotes - data.length)
      // console.log('Data Length: ' + data.length)
      const res = await fetch(`https://quotes.phatsanphon.site/api/jokes/limit?` + new URLSearchParams({
        start: getTotalQuotes - quotes.length,
        limit: 5
      }))
      const newQuotes = await res.json()

      // console.log(newQuotes.data)

      setQuotes(quotes => [...quotes, ...newQuotes.data])
    }

    useEffect(() => {
      setHasMore(getTotalQuotes > quotes.length ? true : false)
    }, [quotes])

    return (
      <div className={mainTailwindCSS}>
        <Header />

        <div className='flex flex-col items-center justify-center w-full flex-1 px-0'>
          <InfiniteScroll
            dataLength={quotes.length} next={getMoreQuotes} hasMore={hasMore}
            loader={
              <h4 className='text-white text-lg m-10 flex flex-initial items-center justify-center drop-shadow-lg'>
                โหลดเพิ่มเติมอยู่นร้าาา รอแป๊ปนึง</h4>}
            endMessage={
              <h3 className='text-white text-lg m-10 flex flex-initial items-center justify-center drop-shadow-lg'>
                หมดแย้ว ๆ</h3>}
            className='flex-col'
          >
            {quotes.map((quote) => {
              // return (
              //   <LongQuoteInfoCard
              //     key={quote.sentenceId} quote={quote.sentence}
              //     name={quote.name} quoteId={quote.sentenceId} />
              // )
              if (quote.sentence.length > 50) {
                quote.sentence = quote.sentence.slice(0, 50) + '...'
              }

              return (
                <div className='bg-white rounded-lg max-w-3xl w-full h-22'>
                  <div className='m-5 flex flex-initial items-center max-w-5xl'>
                    <div className='m-5 items-center'>
                      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>{quote.sentenceId}</h1>
                    </div>
                    <div>
                      <h1 className='text-base md:text-lg lg:text-xl xl:text-2xl font-bold hover:underline items-center'>
                        <Link href={`/quotes/${quote.sentenceId}`}><a>{quote.sentence}</a></Link></h1>
                      <h3 className=''>โดย {quote.name}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </InfiniteScroll>
        </div>
        <Footer />
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}


export async function getServerSideProps() {
  let getTotalQuotes = await getAllJokes()
  getTotalQuotes = getTotalQuotes.length

  console.log(getTotalQuotes)

  let data = await getLimitJokes(10)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      getTotalQuotes: +getTotalQuotes
    }
  }
}