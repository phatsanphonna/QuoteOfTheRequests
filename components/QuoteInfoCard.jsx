import React from 'react'

import CategoryButton from './CategoryButton'

export default function QuoteInfoCards({ quote, quoteId, name, category }) {
    console.log(category)
    const categoryButtons = category.map((c, index) => {
        return <CategoryButton index={index} category={c} />
    })

    return (
        <div className='h-96 w-11/12 bg-white rounded-lg text-left text-black drop-shadow-2xl space-y-3'>
            <h6 className='text-xs md:text-sm lg:text-base xl:text-lg mt-11 mx-11'>คำคมลำดับที่ {quoteId}</h6>
            <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mt-11 mx-11 line-height-3 '>
                {quote}</h1>
            <h3 className='text-sm md:text-base lg:text-lg xl:text-xl ml-11'>โดย {name}</h3>
            <div className='ml-11 mt-11 mr-11'>
                <span className='my-5 underline'>หมวดหมู่</span>
                <div className='flex space-x-5 my-5 mx-auto'>{categoryButtons}</div>
            </div>
        </div>
    )
}
