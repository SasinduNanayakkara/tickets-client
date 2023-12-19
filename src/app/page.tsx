"use client"
import Categories from '@/Components/Categories'
import Event from '@/Components/Event'
import Slider from '@/Components/Slider'
import { useEffect, useState } from 'react';
import { getEvents } from './api/Events';
import { getToken } from './api/Token';

export default function Home() {
  const [eventData, setEventData] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const [eventImages, setEventImages] = useState([{id: 0, image: ''}]);

  useEffect(() => {
    const getTokendata = async () => {
      const result = await getToken();
      localStorage.setItem('accessToken', result);
      console.log(result, "token");
      const storedAccessToken = localStorage.getItem('accessToken');
      if (storedAccessToken) {
        setAccessToken(storedAccessToken);
      }
    };
  
    getTokendata();
  }, []);

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
  console.log("event image", eventImages);
  if (eventImages[0].image === '') {
    eventImages.slice(1)
  }
  return (
    <main>
      <Slider images={eventImages}/>
      <Categories/>
      <Event events={eventData}/>
    </main>
  )
}
