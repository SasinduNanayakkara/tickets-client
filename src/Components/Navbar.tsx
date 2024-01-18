"use client"
import Link from 'next/link'
import React from 'react'
import { BiMenuAltLeft } from "react-icons/bi"; 
import Menu from './Menu';
import { useGlobalContext } from '@/app/Context/Store';
import { FaRegCircleUser } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

function Navbar() {
  // const user = localStorage.getItem('username') != '' ?  true: false;
  const {userId, setUserId} = useGlobalContext();
  const router = useRouter();

  const signOut = () => {
    setUserId('');
    router.push('/');
  }

  const user = false;
  return (
    <div className='h-12 text-white md:font-bold px-8 flex items-center justify-between border-b-2 border-b-[#E50914] uppercase md:h-20 lg:px-20 xl:px-30'>
        <div className='hidden md:flex gap-10'>
          <Link href={"/"} className='hover:bg-[#E50914] hover:text-white py-4 px-4'>Home</Link>
          <Link href={"/events"} className='hover:bg-[#E50914] hover:text-white py-4 px-4'>Events</Link>
          <Link href={"/"} className='hover:bg-[#E50914] hover:text-white py-4 px-4'>Contact Us</Link>
        </div>
        <div className='py-4 text-xl md:font-extrabold flex-1 md:text-center'>
            <Link href={"/"}>Grab Your Tickets</Link>
        </div>
        <div className='md:hidden'>
            <Menu/>
        </div>
        <div className='hidden md:flex gap-10'>
          
          {userId === '' ? (<Link href={"/login"} className='hover:bg-[#E50914] hover:text-white py-4  px-4'>Sign In</Link>) : (<Link href={"/"} className='hover:bg-[#E50914] hover:text-white py-4 px-4' onClick={() => signOut()}>Sign Out</Link>)}
          {userId === '' ? (<Link href={"/register"} className='hover:bg-[#E50914] hover:text-white py-4 px-4'>Sign Up</Link>) : (<Link href={"/user"} className='hover:bg-[#E50914] hover:text-white py-4 px-4 text-3xl'><FaRegCircleUser /></Link>)}

        </div>
    </div>
  )
}

export default Navbar