"use client";
import React from 'react'
import { ImCancelCircle } from "react-icons/im";
import { useRouter } from 'next/navigation';

function Fail() {
    const router = useRouter();
    React.useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, []);

  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
            <span className='text-4xl font-extrabold text-[#E50914] flex flex-col items-center justify-center gap-5 my-72 xl:my-48 pb-8 uppercase'><ImCancelCircle />Payment Failed, 
            <span>Please try again</span> </span>
        </div>
    </div>
  )
}

export default Fail