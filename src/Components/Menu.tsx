"use client"
import Link from 'next/link';
import React, {useState} from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const links = [
  {id: 1, title: "Home", url:"/"},
  {id: 2, title: "Events", url: "/events"},
  {id: 3, title: "Contact Us", url: "/"},
]

function Menu() {
    const [open, setOpen] = useState(false);
    const user = false;
  return (
    <div>
        {!open ? (
        <div className='text-2xl' onClick={() => setOpen(true)}>
            <BiMenuAltLeft />
        </div>
        ) : (
        <div className='text-2xl' onClick={() => setOpen(false)}>
            <IoCloseSharp/>
        </div>
        )}
        {open &&(<div className='bg-[#E50914] text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
            ) )}
            {!user ? (<Link href={"/login"} onClick={() => setOpen(false)}>Sign In</Link>) : (<Link href={"/"} onClick={() => setOpen(false)}>Sign Out</Link>)}
            {!user ? (<Link href={"/register"} onClick={() => setOpen(false)}>Sign Up</Link>) : (<Link href={"/"}></Link>)}
        </div>)}
    </div>
  )
}

export default Menu