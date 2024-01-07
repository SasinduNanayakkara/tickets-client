"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel, Input } from "antd";
import image from "@/Assats/no-data-icon-20.jpg";
import { Slider } from "@/app/Types/Slider";



interface ImageProps {
  images: Slider[];
}

function Slider({images}: ImageProps) {
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

        </>
      ) : (
        <div className="flex flex-col items-center m-5 justify-center h-[50vh]">
          <Image src={image} alt="no-data" />
          <div>
            <span className="text-2xl font-extrabold">No Events Available</span>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default Slider;
