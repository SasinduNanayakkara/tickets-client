"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { WiTime3 } from "react-icons/wi";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi2";
import {formatDate, formatTime} from "@/Utils/validations";
import { Event } from "@/app/Types/Events";
import { useRouter } from "next/navigation";

interface EventProps {
  events: Event[];
}

function Event({events}: EventProps) {
  console.log("Events events ", events);

  const router = useRouter();

  const handleBuy = async () => {
    
  }
  
  return (
    <div>
          <div className="md:flex md:flex-wrap xl:mx-6 md:items-center md:justify-center">
            {events?.map((item: any) => (    
            <div key={item._id} className="flex flex-col my-6  bg-stone-900  mx-4 md:w-[50vw]  xl:w-[28vw]">
              <Image src={item.eventImage[0]} width="0" height="0" className="w-full" alt="" unoptimized />
              <div className="flex flex-row items-center justify-between mt-4 px-4">
                <div>
                  <div className="flex flex-row gap-3 justify-between text-base">
                    <span className="flex flex-row gap-2 items-center justify-center"><SlCalender /> {formatDate(item.eventDate[0])}</span>
                    <span className="flex flex-row gap-2 items-center justify-center"><WiTime3 /> {formatTime(item.eventDate[0])}</span>
                  </div>
                  <div className="mt-2 text-lg font-bold uppercase">{item.eventName}</div>
                  <div className="flex flex-row gap-2 items-center mt-2"><IoLocationSharp /> {item.venue}</div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center text-[#E50914] font-bold"> 
                    {item.ticketPrice.map((ticket: any) => (
                    <span key={ticket._id}>LKR {ticket.ticketPrice}/=</span>
                    ))}
                </div>
              </div>
              <button onClick={() => router.push(`/event/${item._id}`)} className="flex gap-2 items-center justify-center bg-[#E50914] rounded-b-lg py-3 mt-2 font-bold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300"><HiOutlineTicket /> buy tickets</button>
            </div>
            ))}
          </div>
    </div>
  );
}

export default Event;
