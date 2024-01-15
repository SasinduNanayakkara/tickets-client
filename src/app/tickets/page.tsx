"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getToken } from "../api/Token";
import { useGlobalContext } from "./../Context/Store";
import { updatePaymentStatus } from "../api/Pyament";
import { getTicketData, ticketDownload } from "../api/Ticket";
import Image from "next/image";
import { useQRCode } from "next-qrcode";
import Loading from "../Loading";

function Tickets() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("pay");
  const ticketId = searchParams.get("ticket");
  const userId = searchParams.get("user");
  const { accessToken, setAccessToken, setUserId } = useGlobalContext();
  setUserId(userId as string);
  console.log("paymentRef - ", paymentId);
  console.log("ticketRef - ", ticketId);

  const [ticketData, setTicketData] = useState<any>({});
  const { Canvas } = useQRCode();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getToken();
        if (result) {
          setAccessToken(result);
          const status = await updatePaymentStatus(
            paymentId as string,
            ticketId as string,
            result
          );
          if (status) {
            let data = await getTicketData(ticketId as string, result);
            console.log("ticket data", data);
            setTicketData(data);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const downloadTicket = async () => {
    const result = await ticketDownload(ticketData?.eventImage, ticketData?.paymentId?.paymentRef, ticketData?.location, ticketData?.eventId?.eventName, ticketData?.quantity, ticketData?.date, ticketData?.time, ticketData?.ticketPrice, ticketData?._id, ticketData?.paymentId?.amount, accessToken);
    console.log(result);
  }

  return (
    <div>
      {ticketData?.eventId?.eventImage[0] ? (
        <div className="md:flex md:flex-col md:items-center">
          <div className="flex flex-col xl:flex-row items-center justify-center my-6">
            <span className="text-2xl font-extrabold text-[#E50914] xl:ml-96 xl:pl-48 uppercase">
              Grab Your Digital Ticket
            </span>
          <button onClick={() => downloadTicket()} className="flex gap-2 items-center justify-center xl:ml-96 bg-[#E50914] rounded-lg py-3 mt-2 px-8 font-bold uppercase transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-white hover:text-[#E50914] hover:rounded-lg duration-300"> Download Ticket</button>

          </div>
          <div className="bg-stone-900 rounded-md mx-5 md:w-1/3">
            <div className="relative w-full flex items-center justify-center">
              <Image
                src={ticketData?.eventId?.eventImage[0]}
                width="0"
                height="0"
                className="w-full z-10 absolute top-0 left-0 h-[250px]"
                alt=""
                unoptimized
              />
              <div className="z-20 rounded-full absolute top-1/2 mt-2">
                <Canvas
                  text={ticketData?.paymentId?.paymentRef ?? "test"}
                  options={{
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                  }}
                />
              </div>
            </div>
            <div className="mt-64 p-5">
              <div className="flex items-center justify-center">
                <span className="text-xl text-slate-400">
                  {ticketData?.location}
                </span>
              </div>
              <div className="flex flex-row justify-between mt-3">
                <div>
                  <span className="text-2xl font-bold">
                    {ticketData?.eventId?.eventName}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-3xl font-bold">
                    {ticketData?.quantity}
                  </span>
                  <span className="text-slate-400">Ticket(s)</span>
                </div>
              </div>
              <div className="flex flex-col mt-3">
                <span className="text-slate-400">Date & time</span>
                <span>
                  {ticketData?.date} at {ticketData?.time}
                </span>
              </div>
              <div className="flex flex-col mt-3">
                <span className="text-slate-400">Ticket Price</span>
                <span>LKR {ticketData?.ticketPrice}.00/=</span>
              </div>
              <div className="divide-y divide-dashed divide-slate-400"></div>
              <div className=" flex flex-row items-center justify-between mt-4 gap-3 border-t-slate-400 border-dashed border-4 pt-3 border-stone-900">
                <div className="flex flex-col">
                  <span className="text-slate-400">Ticket No.</span>
                  <span>{ticketData?._id.substring(0, 10)}</span>
                  <span>{ticketData?._id.substring(10)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-400">Paid</span>
                  <span className="text-[#E50914] font-bold">LKR {ticketData?.paymentId?.amount}.00/=</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Tickets;
