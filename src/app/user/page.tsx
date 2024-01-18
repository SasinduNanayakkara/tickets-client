"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useGlobalContext } from "../Context/Store";
import { getTicketDetailsByUser } from "../api/Ticket";
import { getUserById } from "../api/Users";
import Loading from "../Loading";
import {useRouter} from "next/navigation";

function User() {

  const { accessToken, userId } = useGlobalContext();
  const [userDetails, setUserDetails] = useState<any>({});
  const [ticketDetails, setTicketDetails] = useState<any>([]);
  const router = useRouter();

  if (!userId && !accessToken) {
    router.push("/");
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await getUserById(userId);
        if (userData) {
          setUserDetails(userData?.result);
          const ticketData = await getTicketDetailsByUser(userId, accessToken);
          if (ticketData) {
            setTicketDetails(ticketData);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log("ticket details - ", ticketDetails);
  console.log("user details - ", userDetails);

  return (
    <main>
        {userDetails? (
            <div className="mx-6">
            <div className="flex flex-row mt-6 items-center">
              <span className="text-6xl xl:ml-20">
                <FaRegCircleUser />
              </span>
              <span className="text-3xl ml-5 xl:ml-10 text-[#E50914] uppercase font-bold">
                {userDetails?.firstName} {userDetails?.lastName}
              </span>
            </div>
            <div className="mt-10 text-xl mx-5 xl:mx-64 md:mx-40">
              <div className="md:flex md:flex-row md:justify-start md:gap-64">
                <div className="flex flex-row mt-3">
                  <span>Email:</span>
                  <span className="ml-4">{userDetails?.email}</span>
                </div>
                <div className="flex flex-row mt-3">
                  <span>Phone:</span>
                  <span className="ml-4">{userDetails?.phone}</span>
                </div>
              </div>
              <div className="md:flex md:flex-row md:justify-start md:gap-64">
                <div className="flex flex-row mt-3">
                  <span>NIC:</span>
                  <span className="ml-4">{userDetails?.NIC}</span>
                </div>
                <div className="flex flex-row mt-3">
                  <span>Address:</span>
                  <span className="ml-4">{userDetails?.address}</span>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <span className="text-2xl xl:text-3xl md:ml-20 uppercase font-bold text-[#E50914]">
                Ticket History
              </span>
              <div className="mt-8 flex flex-col xl:items-center">
                {ticketDetails?.length === 0 && (
                    <div>
                        <span className="text-3xl text-[#E50914] font-bold">NO TICKET HISTORY FOUND</span>
                    </div>
                )}
                {ticketDetails?.map((ticket: any) => (
                <div className="bg-stone-900 mb-5 flex flex-row md:w-2/3">
                <Image
                      src={ticket?.eventId?.eventImage[0]}
                      className="w-1/3 xl:w-1/3 h-full"
                      width={0}
                      height={0}
                      alt="asd"
                      unoptimized
                    />
                    <div className="flex flex-row items-end justify-between"> 
                      <div className="flex flex-col ml-3 xl:ml-10 xl:mt-2 md:mt-10 xl:gap-8 xl:pb-4 md:gap-4 md:text-xl">
                        <span className="">{ticket?.eventId?.eventName}</span>
                        <span>{ticket?.date} at {ticket?.time}</span>
                        <span>
                        {ticket?.ticketPrice} x {ticket?.quantity}= {" "}
                          <span className="xl:font-bold text-[#E50914]">
                            LKR {ticket?.paymentId?.amount}
                          </span>
                        </span>
                      </div>
                </div>
                  <div className="flex items-center justify-center pl-5 md:pl-72 pr-4">
                      <span className="md:text-3xl xl:pl-10 text-[#E50914] md:font-bold">PAID</span>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        ) : (<Loading />)}
    </main>
    
  );
}

export default User;
