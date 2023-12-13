import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { WiTime3 } from "react-icons/wi";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi2";
import { data } from "./data";
import {formatDate, formatTime} from "@/Utils/validations"


function Event() {


  return (
    <div>
      <div className="">
        <div className="">
          <div className="md:flex md:flex-row xl:mx-6">
            {data.map(item => (    
            <div key={item._id} className="flex flex-col my-6  bg-stone-900  mx-4 md:w-[50vw]  xl:w-[33vw]">
              <Image src={item.eventImage[0]} width="0" height="0" className="w-full" alt="" />
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
                    {item.ticketPrice.map(ticket => (
                    <span key={ticket._id}>LKR {ticket.ticketPrice}/=</span>
                    ))}
                </div>
              </div>
              <button className="flex gap-2 items-center justify-center bg-[#E50914] rounded-b-lg py-3 mt-2 font-bold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300"><HiOutlineTicket /> buy tickets</button>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
