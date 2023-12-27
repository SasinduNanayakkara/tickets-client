"use client"
import Categories from '@/Components/Categories'
import Event from '@/Components/Event'
import Slider from '@/Components/Slider'
import { getEventTypeData } from '@/app/api/Events'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '@/app/Context/Store'

function CategoryPage({
  params: {category},
}: {
  params: {
    category: string
  }
}) {
  
  const [eventData, setEventData] = useState([]);
  const [eventImages, setEventImages] = useState([{id: 0, image: ''}]);
  const {accessToken} = useGlobalContext();

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
      <Categories/>
      <Event events={eventData}/>
    </main>
  )
}

export default CategoryPage 