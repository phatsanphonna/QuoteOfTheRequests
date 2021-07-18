import React from 'react'
import Link from 'next/link'

import CategoryButton from './CategoryButton'

export default function QuoteInfoCards({ quote, quoteId, name, date, category, prevQuote, nextQuote }) {
    const categoryButtons = category.map((c, index) => {
        return <CategoryButton index={index} category={c} />
    })

    const navNextButton = 'repo py-2 px-6 rounded-full hover:bg-green-500 bg-green-100 text-gray-500 hover:text-white'
    const navPrevButton = 'repo py-2 px-6 rounded-full hover:bg-yellow-500 bg-yellow-100 text-gray-500 hover:text-white'

    // if (nextQuote) {
    //     nextQuote = (
    //         <button className={'absolute bottom-0 right-0 m-10 ' + navNextButton}>
    //             <Link href={`/quotes/${quoteId + 1}`}><a>คำคมถัดไป</a></Link>
    //         </button>
    //     )
    // }
    if (prevQuote) {
        prevQuote = (
            <button className={'absolute bottom-0 left-0 m-10 ' + navPrevButton}>
                <Link href={`/quotes/${quoteId - 1}`}><a>คำคมก่อนหน้านี้</a></Link>
            </button>
        )
    }

    return (
        <div className='h-96 w-10/12 xl:w-11/12 bg-white rounded-lg text-left text-black drop-shadow-2xl space-y-3'>
            <h6 className='text-xs md:text-sm lg:text-base xl:text-lg mt-11 mx-11'>คำคมลำดับที่ {quoteId} ({date})</h6>
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mt-11 mx-11 line-height-3 '>
                {quote}</h1>
            <h3 className='text-sm md:text-base lg:text-lg xl:text-xl ml-11'>โดย {name}</h3>
            <div className='ml-11 mt-11 mr-11'>
                <div className='flex space-x-5 my-5 mx-auto'>{categoryButtons}</div>
            </div>
            <div>
                {prevQuote}
                {/* {nextQuote} */}
            </div>
        </div>
    )
}
