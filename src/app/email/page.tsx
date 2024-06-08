"use client"
import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { forgotPassword } from '../api/Users';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../Context/Store';

function page() {
    const [emailText, setEmailText] = useState('');
    const {setUserId} = useGlobalContext();
    const router = useRouter();

    const email = async () => {
        const result = await forgotPassword(emailText);
        if (result?.status === "success") {
            setUserId(emailText);
            console.log("//' ",result);
            router.push('/forgotPassword');
        }
    }

    
  return (
    <div className='h-full'>
        <div className='flex justify-center items-center mt-8 mb-20'>
            <div className='w-2/4 bg-stone-900 flex flex-col rounded-xl justify-center items-center py-6'>
                <span className='py-4 text-4xl md:font-extrabold flex-1 md:text-center text-[#E50914] uppercase'>Reset Your Password</span>
                <div className='mt-10'>
                    <span className='text-xl'>Please enter your email to send an OTP</span>     
                </div>
                    <div className='mt-10 w-2/4 flex flex-col justify-center items-center gap-5'>
                        <Input type='email' placeholder="email" className="md:h-10" onChange={(e) => setEmailText(e.target.value)}/>
                        <button onClick={() => email()} className=" text-center px-5 bg-[#E50914] w-2/4 rounded-lg py-3 mt-2 font-extrabold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300">Send</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default page