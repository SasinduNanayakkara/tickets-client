import React from "react";
import image from "@/Assats/THREE NADA MAIBANNER.jpg";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { Select } from "antd";
import { SlCalender } from "react-icons/sl";
import { WiTime3 } from "react-icons/wi";
import { HiOutlineTicket } from "react-icons/hi2";
import {data} from "@/Components/data";

function SingleEventPage() {
  return (
    <div>
      <div className="h-5/6">
        <Image src={image} alt="" className="w-full md:h-[calc(100vh-10rem)]" />
      </div>
      <div className="px-3 xl:flex xl:flex-row xl:gap-10">
        <div className="xl:w-2/3">
          <div className="flex items-center justify-center mt-4 xl:mt-10">
            <span className="text-3xl xl:text-5xl uppercase font-bold">
              {data[0].eventName}
            </span>
          </div>
          <div className="mt-4 text-justify px-2 xl:mt-10 xl:px-10 xl:text-lg">
            <p>
             {data[0].description}
            </p>
          </div>
        </div>
        <div className="mt-6 bg-stone-900 flex flex-col gap-4 items-center pt-4 justify-center mx-5 xl:w-1/4 xl:text-lg">
          <div>
            <span className="flex items-center gap-2 text-[#E50914]">
              <IoLocationSharp />
              Select venue / Theatre
            </span>
            <span className="text-lg font-bold xl:text-xl">{data[0].venue}</span>
          </div>
          <div className="w-3/4">
            <span className="flex items-center gap-2 justify-center mb-2 text-[#E50914]">
            <SlCalender />
              Select Date
            </span>
            <Select
              defaultValue="lucy"
              // onChange={handleChange}
              className="w-full"
              options={[
                
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="w-3/4">
            <span className="flex items-center gap-2 justify-center mb-2 text-[#E50914]">
            <WiTime3 />
              Select Time
            </span>
            <Select
              defaultValue="lucy"
              // onChange={handleChange}
              className="w-full"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="w-3/4">
            <span className="flex items-center gap-2 justify-center mb-2 text-[#E50914]">
            <HiOutlineTicket />
              Select Ticket Price
            </span>
            <Select
              defaultValue="lucy"
              // onChange={handleChange}
              className="w-full"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <div className="w-3/4">
            <span className="flex items-center gap-2 justify-center mb-2 text-[#E50914]">
            <HiOutlineTicket />
              Select Ticket Quantity
            </span>
            <Select
              defaultValue="lucy"
              // onChange={handleChange}
              className="w-full"
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
          <button className="flex gap-2 items-center w-full justify-center bg-[#E50914] rounded-b-lg py-3 mt-2 font-bold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300"><HiOutlineTicket /> buy tickets</button>
        </div>
      </div>
    </div>
  );
}

export default SingleEventPage;
