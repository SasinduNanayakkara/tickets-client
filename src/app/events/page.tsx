"use client"
import Categories from '@/Components/Categories'
import Event from '@/Components/Event'
import Slider from '@/Components/Slider'
import React, { useEffect, useState } from 'react'
import { getEvents, getEventsByName } from '../api/Events'
import { useGlobalContext } from '../Context/Store'
import Loading from '../Loading'
import {useRouter} from "next/navigation"
import { Input } from 'antd'

function EventsPage() {

  const [eventData, setEventData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [eventImages, setEventImages] = useState<{id: number, image: string}[]>([]);
  const {accessToken, userId} = useGlobalContext();
  const router = useRouter();
  const { Search } = Input;

  if (!userId && !accessToken) {
    router.push("/");
  }

  useEffect(() => {
    const getEventData = async () => {
      // if (accessToken) {
        const events= await getEvents(accessToken);
        setEventData(events);
        // console.log("event data - ", events[0].eventImage[0]);
        events.map((item:any, index: number) => {
          console.log("image", item.eventImage[0]);
          setEventImages(prev => [...prev, {id: index, image: item.eventImage[0]}]);
        })
      // }
      
    }
    getEventData();
  },[]);

  const onSearch = async () => {
    try {
      const events = await getEventsByName(searchText, accessToken);
      if (events) {
        setEventData(events);
      }
    }
    catch(err) {
      console.log("search error", err);
      
    }
  }

  return (
    <main>
      { eventData.length === 0 ? (
        <Loading />
      ) : (
        <>
      {!searchText && <Slider images={eventImages} />}
          {eventImages?.length > 0 && (
            <div className="flex items-center justify-center mt-4">
              <Search
                placeholder="Book Tickets for any event"
                allowClear
                enterButton="Search"
                size="large"
                className=" w-3/4 md:w-2/4 bg-[#E50914] rounded-md"
                onChange={(e) => setSearchText(e.target.value)}
                onSearch={onSearch}
              />
            </div>
          )}
      <Categories/>
      <Event events={eventData}/>
        </>
      )}
    </main>
  )
}

export default EventsPage