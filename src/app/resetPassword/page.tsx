"use client"
import { Input, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { forgotPassword, resetPassword } from '../api/Users';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '../Context/Store';
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";


function page() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {userId} = useGlobalContext();
    const router = useRouter();
  const [api, contextHolder] = notification.useNotification();


    const openNotification = (messageTitle: string, description: string, type:string) => {
        api.open({
          message: messageTitle,
          description: description,
          icon: type === 'success' ? <CheckCircleOutlined /> : <CloseCircleOutlined />
      })
      }

    const handlePassword = async () => {
        try {
            if (newPassword === confirmPassword) {
                const result = await resetPassword(userId, newPassword);
                if (result?.status === "success") {
                    console.log("//' ",result);
                    router.push('/login');
                }
            }
            else {
                console.log("password not matched");
                openNotification('password not matched', '', 'error');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    
  return (
    <div className='h-full'>
        <div className='flex justify-center items-center mt-8'>
            <div className='w-2/4 bg-stone-900 flex flex-col rounded-xl justify-center items-center py-6'>
                <span className='py-4 text-4xl md:font-extrabold flex-1 md:text-center text-[#E50914] uppercase'>Reset Your Password</span>
                <div className='mt-10'>
                    <span className='text-xl'>Please enter your New Password</span>     
                </div>
                    <div className='mt-10 w-2/4 flex flex-col justify-center items-center gap-5'>
                        <Input.Password type='password' placeholder="New Password" className="md:h-10" onChange={(e) => setNewPassword(e.target.value)}/>
                        <Input.Password type='password' placeholder="Confirm Password" className="md:h-10" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        
                        <button onClick={() => handlePassword()} className=" text-center px-5 bg-[#E50914] w-2/4 rounded-lg py-3 mt-2 font-extrabold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300">Send</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default page