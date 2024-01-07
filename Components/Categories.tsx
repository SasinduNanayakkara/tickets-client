import React from "react";
import { FaMusic } from "react-icons/fa6";
import { GiDramaMasks } from "react-icons/gi";
import { GiMicrophone } from "react-icons/gi";
import { GiVikingLonghouse } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { BsListStars } from "react-icons/bs";
import Link from "next/link";

function Categories() {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-10 items-center justify-center">
      <div className="flex items-center flex-row gap-4 xl:gap-10 mt-10 md:mt-28 justify-center">
        <Link href="/events/Musical">
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <FaMusic />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Musical</span>
        </div>
        </Link>

        <Link href="/events/Drama">
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <GiDramaMasks />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Drama</span>
        </div>
        </Link>
        <Link href="/events/Comedy">
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <GiMicrophone />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Comedy</span>
        </div>
        </Link>
      </div >
      <div className="flex items-center flex-row gap-4 xl:gap-10 mt-10 md:mt-28 justify-center">
        <Link href="/events/Exhibition">
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <GiVikingLonghouse />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Exhibition</span>
        </div>
        </Link>
        <Link href="/events/Sports">
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <GiTrophyCup />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Sports</span>
        </div>
        </Link>
        <Link href="/events/Other">
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <BsListStars />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Other</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
