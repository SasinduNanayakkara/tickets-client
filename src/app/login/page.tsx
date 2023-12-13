"use client";
import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Link from "next/link";

function Login() {
  return (
    <div className="min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-16rem)]">
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:gap-24 md:mt-12">
        <div className="bg-stone-900 flex flex-col items-center justify-center m-5 w-11/12 md:w-5/12">
          <div className="pt-3 flex flex-col gap-4 items-center justify-center">
            <span className="text-2xl font-bold ">Login With Your Account</span>
          </div>
          <div className="flex flex-col w-3/4 gap-3 mt-8">
            <span className="text-lg font-semibold">Email</span>
            <Input placeholder="Email" className="md:h-10" />
          </div>
          <div className="flex flex-col w-3/4 gap-3 mt-6">
            <span className="text-lg font-semibold">Password</span>
            {typeof window !== "undefined" && (
              <Input.Password placeholder="Password" className="md:h-10" />
            )}
          </div>
          <div className="mt-4">
            <span className="text-[#E50914] underline hover:text-white">
              Forgot Your Password
            </span>
          </div>
          <div className="w-full mt-8">
            <button className="gap-2 w-full text-center bg-[#E50914] rounded-b-lg py-3 mt-2 font-extrabold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300">
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
