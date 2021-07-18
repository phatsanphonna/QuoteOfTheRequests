import React from 'react'
import Link from 'next/link'

export default function QuoteInfoCards({ quote, name, quoteId }) {
  if (quote.length > 35) {
    quote = quote.slice(0, 41) + '...'
  }

  // className='h-24 w-72 xl:w-3/5 bg-white rounded-lg text-left text-black drop-shadow-2xl'
  return (
    // <div className='h-auto w-auto xl:w-3/5 bg-white rounded-lg text-left text-black drop-shadow-2xl'>
    //   <div className='m-5 flex flex-initial items-center'>
    //     <div className='mr-4 items-center'>
    //       <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>{quoteId}</h1>
    //     </div>
    //     <div>
    //       <h1 className='text-base md:text-lg lg:text-xl xl:text-2xl font-bold hover:underline items-center'>
    //         <Link href={`/quotes/${quoteId}`}><a>{quote}</a></Link></h1>
    //       <h3 className='text-sm md:text-base lg:text-lg xl:text-xl'>โดย {name}</h3>
    //     </div>
    //   </div>
    // </div>
    <div className='bg-white'>
      <div className=''>
        <h1 className=''>{quoteId}</h1>
      </div>
      <div>
        <h1 className=''>
          <Link href={`/quotes/${quoteId}`}><a>{quote}</a></Link></h1>
        <h3 className=''>โดย {name}</h3>
      </div>
    </div>
  )
}