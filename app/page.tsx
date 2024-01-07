"use client";
import Categories from "@/Components/Categories";
import Event from "@/Components/Event";
import Slider from "@/Components/Slider";
import { Suspense, useEffect, useState } from "react";
import { getEvents, getEventsByName } from "./api/Events";
import { getToken } from "./api/Token";
import { useGlobalContext } from "./Context/Store";
import Loading from "./Loading";
import { Input } from "antd";

export default function Home() {
  const [eventData, setEventData] = useState([]);
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { Search } = Input;
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

  console.log("access-token - ", accessToken);

  console.log("event image", eventImages);

  return (
    <main>
      {eventData.length === 0 ? (
        <Loading />
      ) : (
        <>
          {!searchText && <Slider images={eventImages} />}
          <div className={eventImages?.length === 0 ? 'mt-24' : ''}>
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
          </div>
          <Categories />
          <Event events={eventData} />
        </>
      )}
    </main>
  );
}
