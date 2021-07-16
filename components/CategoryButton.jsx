import React from 'react'

export default function CategoryButton({ category }) {
    return (
        <div className='text-gray-400 hover:text-gray-600 bg-transparent'>
            <button className='repo py-2 px-6 rounded-sm border-dashed border hover:border-gray-500 border-gray-300'>
                {category}</button>
        </div>
    )
}
