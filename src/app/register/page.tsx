"use client";
import { validateEmail, validatePassword, validatePhoneNumber } from "@/Utils/validations";
import { Input, notification } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { User } from "../Types/Users";
import { createUser } from "../api/Users";
import { useGlobalContext } from "../Context/Store";
import { useRouter } from "next/navigation";

function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [NIC, setNIC] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {accessToken, userId} = useGlobalContext();
  const router = useRouter(); 
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

  const userRegister = async () => {
    try {
      if (password === confirmPassword && validatePassword(password)) {
        if (validateEmail(email) && validatePhoneNumber(phone)) {
          const result = await createUser(firstName, lastName, email, phone, NIC, address, password, accessToken);
          console.log("user create result - ", result);
          if (result?.status === 201) {
            openNotification(result?.data.message, '', 'success');
            router.push("/login");
          }
          else {
            openNotification(result?.data.message, '', 'error');
          }
        }
        else{
          openNotification('password or phone not valid', '', 'error');
          console.log("password or phone not valid");
        }
    }
    else {
      openNotification('password not matched', '', 'error');
      console.log("password not matched");
    }
    }
    catch(error) {
      console.error("Registration error:", error);
      openNotification("Registration failed", "", "error");
    }
  }


  return (
    <div className="xl:flex xl:items-center xl:justify-center">
      {contextHolder}
      <div className="bg-stone-900 rounded-lg flex flex-col items-center justify-center xl:w-1/2">
        <div className="flex items-center justify-center my-5">
          <span className="text-2xl font-bold">Register To Grab Your Tickets</span>
        </div>
        <div className="flex flex-col gap-2 w-3/4">
          <span className="text-lg font-bold">First Name</span>
          <Input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Last Name</span>
          <Input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Email</span>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Phone</span>
          <Input
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">NIC</span>
          <Input
            placeholder="NIC"
            onChange={(e) => setNIC(e.target.value)}
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Address</span>
          <Input
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Password</span>
          {typeof window !== "undefined" && (
            <Input.Password
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 w-3/4 mt-4">
          <span className="text-lg font-bold">Confirm Password</span>
          {typeof window !== "undefined" && (
            <Input.Password
              placeholder="Confirm Name"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="md:h-10 focus:border-[#E50914] hover:border-[#E50914]"
            />
          )}
        </div>
        <div className="flex flex-col gap-2 w-3/4 my-8">
          <button onClick={() => userRegister()} className=" text-center px-32 bg-[#E50914] rounded-lg py-3 mt-2 font-extrabold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
