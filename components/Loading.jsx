import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import loading from '@public/loading.png'

export default function Loading() {
  const mainDivTailwindCSS = (
    `flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-200 via-red-300 to-yellow-200`
  )
  const mainTagTailwindCSS = (
    'flex items-center justify-center w-full drop-shadow-2xl'
  )

  return (
    <div className={mainDivTailwindCSS}>
      <Head>
        <title>Quote of the Request | Loading</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={mainTagTailwindCSS}>
        <Image src={loading} className='m-11 animate-spin drop-shadow-sm' />
      </main>
    </div>
  )
}
