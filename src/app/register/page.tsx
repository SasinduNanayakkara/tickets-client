"use client";
import { Input } from "antd";
import React from "react";

function Register() {
  return (
    <div className="xl:flex xl:items-center xl:justify-center">
      <div className="bg-stone-900 rounded-lg flex flex-col items-center justify-center xl:w-1/2">
        <div className="flex items-center justify-center my-5">
          <span className="text-2xl font-bold">Register</span>
        </div>
        <div className="flex flex-col gap-2 w-3/4">
          <span className="text-lg font-bold">First Name</span>
          <Input
            placeholder="First Name"
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Last Name</span>
          <Input
            placeholder="Last Name"
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Email</span>
          <Input
            placeholder="Email"
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Phone</span>
          <Input
            placeholder="Phone"
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">NIC</span>
          <Input
            placeholder="NIC"
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Address</span>
          <Input
            placeholder="Address"
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Password</span>
          {typeof window !== "undefined" && (
            <Input.Password
              placeholder="Password"
              className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Confirm Password</span>
          {typeof window !== "undefined" && (
            <Input.Password
              placeholder="Confirm Name"
              className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 w-3/4 my-8">
          <button className=" text-center px-32 bg-[#E50914] rounded-lg py-3 mt-2 font-extrabold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
