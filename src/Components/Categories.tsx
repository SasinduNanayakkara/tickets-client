import React from "react";
import { FaMusic } from "react-icons/fa6";
import { GiDramaMasks } from "react-icons/gi";
import { GiMicrophone } from "react-icons/gi";
import { GiVikingLonghouse } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { BsListStars } from "react-icons/bs";

function Categories() {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-10 items-center justify-center">
      <div className="flex items-center flex-row gap-4 xl:gap-10 mt-10 md:mt-28 justify-center">
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <FaMusic />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Musical</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <GiDramaMasks />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Drama</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <GiMicrophone />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Comedy</span>
        </div>
      </div >
      <div className="flex items-center flex-row gap-4 xl:gap-10 mt-10 md:mt-28 justify-center">
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <GiVikingLonghouse />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Exhibition</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <GiTrophyCup />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Sports</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 font-bold">
          <div className="text-4xl border-2 border-[#E50914] p-6 md:p-8 rounded-xl text-[#E50914] hover:border-white hover:text-white">
            <BsListStars />
          </div>
          <span className="hover:text-[#E50914] xl:text-xl">Other</span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
