"use client";
import React, { useState } from "react";
import { Input, notification } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { getUserById, loginUser } from "../api/Users";
import { useGlobalContext } from "../Context/Store";
import { useRouter, useSearchParams } from "next/navigation";
import NotificationBar from "@/Components/NotificationBar";
import { createPayment } from "../api/Pyament";
// import openNotification from "@/Components/NotificationBar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    accessToken, 
    setAccessToken, 
    setUserId, 
    setRole, 
    userId, 
    setRefreshToken,
    eventId,
    ticketPrice,
    quantity,
    date,
    time,
    location
  } = useGlobalContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('tickets');
  const [api, contextHolder] = notification.useNotification();

  if (!userId && !accessToken) {
    router.push("/");
  }

  const openNotification = (messageTitle: string, description: string, type:string) => {
    api.open({
      message: messageTitle,
      description: description,
      icon: type === 'success' ? <CheckCircleOutlined /> : <CloseCircleOutlined />
  })
  }

  const signIn = async () => {
    try {
      const result = await loginUser(email, password, accessToken);
      if (result?.accessToken) {
        openNotification('Login Successful', '', 'success');
        // {<NotificationBar notification={{messageTitle: 'Login Successful', description:'', type:'success'}} />}
        setUserId(result.userId as string);
        setRole(result.roles as string);
        setAccessToken(result.accessToken);
        setRefreshToken(result.refreshToken);
        console.log("query - ", search);
        const user = await getUserById(result.userId as string);
        console.log("user data ", user);
        
        if (search === 'true') {
          // router.push("/tickets");
          const sessionUrl = await createPayment(eventId, ticketPrice, quantity as number, result?.userId as string, date, time, location, result.accessToken);
          console.log("sessionUrl ", sessionUrl);
          router.push(sessionUrl?.data.data as any);
        }
        else {
          router.push("/");
        }
      }
      console.log(result);
      openNotification('Login Unsuccessful', '', 'error');
    }
    catch(err) {
      console.log("ddd", err);
      openNotification('Login Unsuccessful', '', 'error');
    }
  }

  return (
    <div className="min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-16rem)]">
      {contextHolder}
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:gap-24 md:mt-12">
        <div className="bg-stone-900 flex flex-col items-center justify-center m-5 w-11/12 md:w-5/12">
          <div className="pt-3 flex flex-col gap-4 items-center justify-center">
            <span className="text-2xl font-bold ">Login With Your Account</span>
          </div>
          <div className="flex flex-col w-3/4 gap-3 mt-8">
            <span className="text-lg font-semibold">Email</span>
            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="md:h-10" />
          </div>
          <div className="flex flex-col w-3/4 gap-3 mt-6">
            <span className="text-lg font-semibold">Password</span>
            {typeof window !== "undefined" && (
              <Input.Password placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="md:h-10" />
            )}
          </div>
          <div className="mt-4">
            <span onClick={() => router.push("/email")} className="text-[#E50914] underline hover:text-white">
              Forgot Your Password
            </span>
          </div>
          <div className="w-full mt-8">
            <button onClick={() => signIn()} className="gap-2 w-full text-center bg-[#E50914] rounded-b-lg py-3 mt-2 font-extrabold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300">
              {" "}
              Login
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center mt-8">
            <span className="text-2xl font-bold">OR</span>
          </div>
          <div className="flex items-center justify-center my-4">
            <Link href={"/register"}>
              <button className=" text-center px-32 bg-[#E50914] rounded-lg py-3 mt-2 font-extrabold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300">
                {" "}
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
