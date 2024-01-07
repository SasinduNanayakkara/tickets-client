"use client"
import Categories from '@/Components/Categories'
import Event from '@/Components/Event'
import Slider from '@/Components/Slider'
import { getEventTypeData } from '@/src/app/api/Events'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '@/src/app/Context/Store'
import { useRouter } from 'next/navigation'
import { Input } from 'antd'

function CategoryPage({
  params: {category},
}: {
  params: {
    category: string
  }
}) {
  
  const [eventData, setEventData] = useState([]);
  const [eventImages, setEventImages] = useState([{id: 0, image: ''}]);
  const {accessToken, userId} = useGlobalContext();
  const router = useRouter();
  const { Search } = Input;

  if (!userId && !accessToken) {
    router.push("/");
  }

  console.log("value - ", category);
  useEffect(() => {
    const getEventData = async () => {
      try {
        const events = await getEventTypeData(category, accessToken);
        setEventData(events);
        events.map((item:any, index: number) => {
          console.log("image", item.eventImage[0]);
          setEventImages(prev => [...prev, {id: index, image: item.eventImage[0]}]);
        })
      }
      catch(err) {
        console.log(err);
      }
    }
    getEventData();
  },[]);

  return (
    <main>
      <Slider images={eventImages}/>
      {eventImages?.length > 0 && (
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
          )}
      <Categories/>
      <Event events={eventData}/>
    </main>
  )
}

export default CategoryPage 