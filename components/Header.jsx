import React from 'react'
import Link from 'next/link'

export default function Header({ indexPage = false }) {
    let indexLink
    if (!indexPage) {
        indexLink = <Link href='/'><a className='text-white hover:underline'>สุ่มคำคม</a></Link>
    } else {
        indexLink = ''
    }
    return (
        <header className='flex items-center justify-end space-x-10 w-full h-12 mt-2 mr-12 backdrop-blur-xl drop-shadow-lg text-md'>
            {indexLink}
            <Link href='/browse'><a className='text-white hover:underline'>หาคำคมเพิ่มเติม</a></Link>
            <Link href='/about'><a className='text-white hover:underline'>เกี่ยวกับ</a></Link>
            <Link href='/API'><a className='text-white hover:underline'>สำหรับนักพัฒนา</a></Link>
            <button className='repo py-2 px-6 rounded-full bg-gray-100 hover:bg-gray-700 hover:text-white'>
                <a href='https://forms.gle/utTM8Yqw8R4VVD4d8' rel="noopener noreferrer" target="_blank">
                    มีมุข หรือ คำคมที่โดน ๆ</a>
            </button>
        </header>
    )
}
