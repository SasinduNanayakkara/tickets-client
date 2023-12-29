"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel, Input } from "antd";
import image from "@/Assats/THREE NADA MAIBANNER.jpg";
import image1 from "@/Assats/DES 03 MAIN.jpg";
import image2 from "@/Assats/parinamaya new mainbanner.jpg";
import image3 from "@/Assats/ada hamu wemuda new MAINBANNER VOL 02.jpg";
import { Slider, SliderType } from "@/app/Types/Slider";

const { Search } = Input;

interface ImageProps {
  images: Slider[];
}

function Slider({images}: ImageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  images.shift();
console.log('slide images', images);

  return (
    <div className="relative">
      {images?.length > 0 ? 
      (
        <>
      <Carousel autoplay autoplaySpeed={3000}>
        {images?.map((item: any) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt=""
              width='0'
              height='0'
              className="w-full md:h-[calc(100vh-10rem)]"
              unoptimized
            />
          </div>
        ))}
      </Carousel>
      <div className="flex items-center justify-center mt-4">
        <Search
          placeholder="Book Tickets for any event"
          allowClear
          enterButton="Search"
          size="large"
          className=" w-3/4 md:w-2/4 bg-[#E50914] rounded-md"
          //   onSearch={onSearch}
        />
      </div>
        </>
      ) : (
        <div>No data</div>
      )
      }
    </div>
  );
}

export default Slider;
