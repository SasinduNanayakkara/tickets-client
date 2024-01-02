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
});

export const GlobalContextProvider = ({children}) => {
    const [userId, setUserId] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [role, setRole] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    return (
        <GlobalContext.Provider value={{userId, setUserId, accessToken, setAccessToken, role, setRole, refreshToken, setRefreshToken}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
