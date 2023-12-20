"use client"
import Categories from '@/Components/Categories'
import Event from '@/Components/Event'
import Slider from '@/Components/Slider'
import React, { useEffect, useState } from 'react'
import { getEvents } from '../api/Events'

function EventsPage() {

  const [eventData, setEventData] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const [eventImages, setEventImages] = useState([{id: 0, image: ''}]);

  useEffect(() => {
    const getEventData = async () => {
      // if (accessToken) {
        const events= await getEvents();
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
  return (
    <main>
      <Slider images={eventImages}/>
      <Categories/>
      <Event events={eventData}/>
    </main>
  )
}

export default EventsPage