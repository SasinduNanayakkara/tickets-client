"use client"
import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/Store';
import { validateOtp } from '../api/Users';
import { useRouter } from 'next/navigation';

function page() {
    const [timeLeft, setTimeLeft] = useState(90);
    const {userId} = useGlobalContext();
    const [otp, setOtp] = useState('');
    const router = useRouter();

    useEffect(() => {
        
        if (timeLeft > 0) {
          const timerId = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
          }, 1000);
    
          // Cleanup the timer if the component is unmounted or timeLeft changes
          return () => clearTimeout(timerId);
        }
      }, [timeLeft]);

      const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };

      const handleOtp = async () => {
        try {
            const result = await validateOtp(userId, otp);
            if (result) {
                console.log("~~~", result);
                router.push('/resetPassword');
            }
        }
        catch (err) {
            console.log(err);
        }
      }
    
  return (
    <div className='h-full'>
        <div className='flex justify-center items-center my-8'>
            <div className='w-2/4 bg-stone-900 flex flex-col rounded-xl justify-center items-center py-6'>
                <span className='py-4 text-4xl md:font-extrabold flex-1 md:text-center text-[#E50914] uppercase'>Reset Your Password</span>
                <div className='mt-10'>
                    <span className='text-xl'>An OTP has been sent to your email</span>
                    <div className='mt-10 flex justify-center items-center'>
                        <span className='text-base pr-3'>OTP will expire within </span>
                        <span className='font-bold text-[#E50914]'>{formatTime(timeLeft)}</span>
                    </div>
                </div>
                    <div className='mt-10 w-1/4 flex flex-col justify-center items-center gap-5'>
                        <Input type='number' placeholder="OTP" className="md:h-10" onChange={(e) => setOtp(e.target.value)} />
                        <button onClick={() => handleOtp()} className=" text-center px-5 bg-[#E50914] w-3/4 rounded-lg py-3 mt-2 font-extrabold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300">Confirm</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default page