import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function about() {
    const mainDivTailwindCSS = (
        'flex flex-col items-center justify-center min-h-screen py-2 ' + `bg-gradient-to-tr from-pink-500 to-yellow-400`
    )
    const mainTagTailwindCSS = (
        'flex flex-col items-center justify-center w-full flex-1 px-20 md:px-64 lg:px-80 text-center text-white'
    )

    return (
        <div className={mainDivTailwindCSS}>
            <Header />

            <main className={mainTagTailwindCSS}>
                <div className="title">
                    <h1 className='text-5xl font-bold m-11 drop-shadow-2xl' style={{ lineHeight: '4rem' }}>
                        - “ พวกมึงเคยเป็นป้ะ เวลาอยากเล่นมุข แต่คิดไม่ออกว่าจะเล่นมุขอะไรอ่ะ ”
                    </h1>
                    <p className='text-lg font-normal m-5'>
                        นี่คือจุดเริ่มต้นของเว็บนี้ครับ เป็นเว็บที่เวลาเราอยากหามุข, คำคมที่มาจากทางบ้าน หรือ บางคนอาจจะหาไอเดียดี ๆ ก็สามารถมาหาได้จากเว็บนี้
                    </p>
                    <p className='text-lg font-light m-5'>
                        โปรเจคของเด็กมัธยมปลาย ที่ไม่ได้เรียนวิทย์-คณิตมา แต่ชอบใช้คอมแก้ปัญหา ตั้งแต่ Hello World, เขียน script แก้ชื่อไฟล์, ดูดรูปดาราจากไอจี ไปยันบอท Discord
                        (ขี้เกียจขนาดไหนอ่ะ คิดดูดิ)
                    </p>
                    <p className='text-lg font-light m-5'>
                        ไอนี่มันตัดสินใจช้าไป มันเพิ่งมารู้ตัวทีหลังว่าชอบคอม อยากเรียนคอม แต่ตัวเองอยู่สายภาษา ไอเด็กเปรตนี่
                        จึงเลยเกิดไปเป็นหลายโปรเจคที่มันทำเสร็จไปแล้ว และ กำลังทำอยู่ ในตอนนี้
                    </p>
                </div>
            </main>

            <div className='m-5' />

            <Footer />
        </div>
    )
}
