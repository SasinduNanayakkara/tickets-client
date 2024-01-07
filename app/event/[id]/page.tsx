"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { Select } from "antd";
import { SlCalender } from "react-icons/sl";
import { WiTime3 } from "react-icons/wi";
import { HiOutlineTicket } from "react-icons/hi2";
import { formatDate, formatTime } from "@/Utils/validations";
import { getEventsById } from "@/app/api/Events";
import { Event } from "@/app/Types/Events";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/Context/Store";

function SingleEventPage({
  params: {id}, 
}: {
  params: {id: string}
}) {

  const [eventData, setEventData] = useState<Event>();
  const router = useRouter();
  const {
    userId, 
    accessToken, 
    setEventId, 
    setQuantity, 
    setTicketPrice,
    setLocation,
    setDate,
    setTime,
  } = useGlobalContext();

  if (!userId && !accessToken) {
    router.push("/");
  }

  const [dates, setDates] = useState([{
    value:"", label: ""
  }]);
  const [times, setTimes] = useState([{
    value:"", label: ""
  }]);
  const [tickets, setTickets] = useState([{
    value:"", label: ""
  }]);


  console.log("id - ", id);
  

  useEffect(() => {
    const getEventData = async () => {
      try {
        const event:Event = await getEventsById(id, accessToken);
        if (event) {
          setEventData(event);
          const formattedDates = event.eventDate.map((date: any) => (
            {
              value:formatDate(date),
              label: formatDate(date)
            }
          ));
          const formattedTime = event.eventDate.map((time: any) => ({
            value: formatTime(time),
            label: formatTime(time)
          }));
          const ticketPrice = event.ticketPrice.map((price: any) => ({
            value: price.ticketPrice as unknown as string,
            label: price.ticketPrice as unknown as string
          }));
          setDates(formattedDates);
          setTimes(formattedTime);
          setTickets(ticketPrice);
          setLocation(event?.venue as string);
          setEventId(event?._id as string);
        }
      }
      catch(err) {
        console.log(err);
      }
    }
    getEventData()
    
  },[]);

  const handleTicketBuy = async () => {
    //if user already login navigate to payment page directly
    if(userId != "") {

      router.push("/tickets");
    }
    else {
      router.push("/login?tickets=true");
    }
    //if user not logged in navigate to login page.
  }

  console.log("single event ", eventData);

  return (
    <div>
      <div className="h-5/6">
        <Image src={eventData?.eventImage[0] as string} width="0" height="0" alt="" unoptimized className="w-full md:h-[calc(100vh-10rem)]" />
      </div>
      <div className="px-3 xl:flex xl:flex-row xl:gap-10">
        <div className="xl:w-2/3">
          <div className="flex items-center justify-center mt-4 xl:mt-10">
            <span className="text-3xl xl:text-5xl uppercase font-bold">
              {eventData?.eventName}
            </span>
          </div>
          <div className="mt-4 text-justify px-2 xl:mt-10 xl:px-10 xl:text-lg">
            <p>
             {eventData?.description}
            </p>
          </div>
        </div>
        <div className="mt-6 bg-stone-900 flex flex-col gap-4 items-center pt-4 justify-center mx-5 xl:w-1/4 xl:text-lg">
          <div>
            <span className="flex items-center gap-2 text-[#E50914]">
              <IoLocationSharp />
              Select venue / Theatre
            </span>
            <span className="text-lg font-bold xl:text-xl">{eventData?.venue}</span>
          </div>
          <div className="w-3/4">
            <span className="flex items-center gap-2 justify-center mb-2 text-[#E50914]">
            <SlCalender />
              Select Date
            </span>
            <Select
              aria-required
              defaultValue="Select Date"
              className="w-full"
              options={dates}
              onChange={(selectedOption) => setDate(selectedOption)}
            />
          </div>
          <div className="w-3/4">
            <span className="flex items-center gap-2 justify-center mb-2 text-[#E50914]">
            <WiTime3 />
              Select Time
            </span>
            <Select
              defaultValue="Select Time"
              className="w-full"
              options={times}
              aria-required
              onChange={((selectedOption) => setTime(selectedOption))}
            />
          </div>
          <div className="w-3/4">
            <span className="flex items-center gap-2 justify-center mb-2 text-[#E50914]">
            <HiOutlineTicket />
              Select Ticket Price
            </span>
            <Select
              defaultValue="Select ticket price"
              className="w-full"
              options={tickets}
              aria-required
              onChange={(selectedOption) => setTicketPrice(selectedOption)}
            />
          </div>
          <div className="w-3/4">
            <span className="flex items-center gap-2 justify-center mb-2 text-[#E50914]">
            <HiOutlineTicket />
              Select Ticket Quantity
            </span>
            <Select
              defaultValue="Select ticket quantity"
              // onChange={handleChange}
              className="w-full"
              options={[
                { value: 1, label: 1 },
                { value: 2, label: 2 },
                { value: 3, label: 3 },
                { value: 4, label: 4 },
                { value: 5, label: 5 },
              ]}
              aria-required
              onChange={(selectedOption) => setQuantity(parseInt(selectedOption))}
            />
          </div>
          <button onClick={() => handleTicketBuy()} className="flex gap-2 items-center w-full justify-center bg-[#E50914] rounded-b-lg py-3 mt-2 font-bold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300"><HiOutlineTicket /> buy tickets</button>
        </div>
      </div>
    </div>
  );
}

export default SingleEventPage;
