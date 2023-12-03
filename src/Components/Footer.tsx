import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='p-4 lg:p-4 xl:p-4 text-white flex flex-col items-center justify-between border-y-2 border-y-[#E50914] mt-4 xl:mt-10'>
      <Link href={"/"} className='font-bold text-xl'>GRAB YOUR TICKETS</Link>
      <p>ALL RIGHTS RESERVED © 2023</p>
    </div>
  )
}

export default Footer