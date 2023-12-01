import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-white flex flex-col items-center justify-between'>
      <Link href={"/"} className='font-bold text-xl'>GRAB YOUR TICKETS</Link>
      <p>ALL RIGHTS RESERVED © 2023</p>
    </div>
  )
}

export default Footer