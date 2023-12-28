"use client";
import Categories from "@/Components/Categories";
import Event from "@/Components/Event";
import Slider from "@/Components/Slider";
import { Suspense, useEffect, useState } from "react";
import { getEvents } from "./api/Events";
import { getToken } from "./api/Token";
import { useGlobalContext } from "./Context/Store";
import Loading from "./Loading";

export default function Home() {
  const [eventData, setEventData] = useState([]);
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  // const [accessToken, setAccessToken] = useState('');
  const [eventImages, setEventImages] = useState<{id: number, image: string}[]>([{id: 0, image: ''}]);

  const { accessToken, setAccessToken } = useGlobalContext();

  useEffect(() => {
    const getTokendata = async () => {
      if (!hasBeenCalled) {
        const result = await getToken();
        console.log(result, "token####");
        if (result) {
          setAccessToken(result);
          const events = await getEvents(result);
          setEventData(events);
          // console.log("event data - ", events[0].eventImage[0]);
          events.map((item: any, index: number) => {
            console.log("image", item.eventImage[0]);
            setEventImages((prev) => [
              ...prev,
              { id: index, image: item.eventImage[0]},
            ]);
            if (eventImages[0].image === "") {
              eventImages.slice(1);
            }
          });
        }
      }
      setHasBeenCalled(true);
    };
    getTokendata();
  }, [hasBeenCalled]);

  console.log("access-token - ", accessToken);

  console.log("event image", eventImages);

  return (
    <main>
      {eventData.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Slider images={eventImages} />
          <Categories />
          <Event events={eventData} />
        </>
      )}
    </main>
  );
}
