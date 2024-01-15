"use client";

import {createContext, useContext, Dispatch, SetStateAction, useState} from "react";

interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>
    accessToken: string,
    setAccessToken: Dispatch<SetStateAction<string>>
    role: string,
    setRole: Dispatch<SetStateAction<string>>
    refreshToken: string,
    setRefreshToken: Dispatch<SetStateAction<string>>
    eventId: string,
    setEventId: Dispatch<SetStateAction<string>>
    ticketPrice: string,
    setTicketPrice:Dispatch<SetStateAction<string>>
    ticketPriceId:string,
    setTicketPriceId:Dispatch<SetStateAction<string>>
    quantity: number | null,
    setQuantity: Dispatch<SetStateAction<number | null>>
    location: string,
    setLocation: Dispatch<SetStateAction<string>>
    date: string,
    setDate: Dispatch<SetStateAction<string>>
    time: string,
    setTime: Dispatch<SetStateAction<string>>
};

const GlobalContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
    accessToken: '',
    setAccessToken: (): string => '',
    role: '',
    setRole: (): string => '',
    refreshToken: '',
    setRefreshToken: (): string => '',
    eventId: '',
    setEventId: (): string => '',
    ticketPrice: '',
    setTicketPrice: (): string => '',
    ticketPriceId: '',
    setTicketPriceId: (): string => '',
    quantity: null,
    setQuantity: (): string => '',
    location: '',
    setLocation: (): string => '',
    date: '',
    setDate: (): string => '',
    time: '',
    setTime: (): string => ''
});

export const GlobalContextProvider = ({children}: any) => {
    const [userId, setUserId] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [role, setRole] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [eventId, setEventId] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [quantity, setQuantity] = useState<number | null>(null);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [ticketPriceId, setTicketPriceId] = useState('');

    return (
        <GlobalContext.Provider value={
            {userId, 
            setUserId, 
            accessToken, 
            setAccessToken, 
            role, 
            setRole, 
            refreshToken, 
            setRefreshToken,
            eventId,
            setEventId,
            ticketPrice,
            setTicketPrice,
            ticketPriceId,
            setTicketPriceId,
            quantity,
            setQuantity,
            time,
            setTime,
            date,
            setDate,
            location,
            setLocation
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
