"use client"
import Categories from '@/Components/Categories'
import Event from '@/Components/Event'
import Slider from '@/Components/Slider'
import { useEffect, useState } from 'react';
import { getEvents } from './api/Events';
import { getToken } from './api/Token';
import { useGlobalContext } from './Context/Store';

export default function Home() {
  const [eventData, setEventData] = useState([]);
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  // const [accessToken, setAccessToken] = useState('');
  const [eventImages, setEventImages] = useState([{id: 0, image: ''}]);

  const {accessToken, setAccessToken} = useGlobalContext();

  useEffect(() => {
    const getTokendata = async () => {
      if (!hasBeenCalled) {
        const result = await getToken();
        console.log(result, "token####");
        if (result) {
          setAccessToken(result);
        }
      }
      setHasBeenCalled(true);
    };
    getTokendata();
  }, [hasBeenCalled]);

  console.log("access-token - ", accessToken); 
  

  useEffect(() => {
    const getEventData = async () => {
      if (accessToken) {
        const events= await getEvents(accessToken);
        setEventData(events);
        // console.log("event data - ", events[0].eventImage[0]);
        events.map((item:any, index: number) => {
          console.log("image", item.eventImage[0]);
          setEventImages(prev => [...prev, {id: index, image: item.eventImage[0]}]);
        })
      }
      
    }
    getEventData();
  },[accessToken]);
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
