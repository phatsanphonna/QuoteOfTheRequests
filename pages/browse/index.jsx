import { useState, useEffect } from 'react'
import useSWR from 'swr'

import InfiniteScroll from 'react-infinite-scroll-component'

import { getAllJokes, getLimitJokes } from '@utils/databaseQuery/findData'

import LongQuoteInfoCard from '@components/LongQuoteInfoCard'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NotFound from '../404'
import Loading from '@components/Loading'

const fetcher = (url) => fetch(url).then((res) => res.json());

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
      const { newQuotes, error } = useSWR(`/api/jokes/limit?` + new URLSearchParams({
        start: getTotalQuotes - quotes.length,
        limit: 5
      }), fetcher)

      if(error) { return <NotFound />}
      if(!newQuotes) { return <Loading /> }

      setQuotes(quotes => [...quotes, ...newQuotes.data])
    }

    useEffect(() => {
      setHasMore(getTotalQuotes > quotes.length ? true : false)
    }, [quotes])

    return (
      <InfiniteScroll
        dataLength={quotes.length} next={getMoreQuotes} hasMore={hasMore}
      >
        <div className={mainTailwindCSS}>
          <Header />

          {quotes.map((quote) => {
            return (
              <LongQuoteInfoCard
                key={quote.sentenceId} quote={quote.sentence}
                name={quote.name} quoteId={quote.sentenceId} />
            )
          })}

          <Footer />
        </div>
      </InfiniteScroll>
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