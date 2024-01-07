import axios from 'axios';

// export const baseUrl = 'https://tickets-backend-sasindunanayakkara.vercel.app/api/v1';
export const baseUrl = "http://localhost:5000/api/v1";

export const getEvents = async (accessToken: string) => {
    try {
        const result = await axios.get(`${baseUrl}/events`, {headers: {
            Authorization: `Bearer ${accessToken}`
        }});
        return result.data.data;
    }
    catch(err) {
        console.log(err);
    }
}

export const getEventTypeData = async (eventType: string, accessToken: string) => {
    try {
        const result = await axios.get(`${baseUrl}/events/eventType/${eventType}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return result.data.data
    }
    catch(err) {
        console.log(err);
    }
}

export const getEventsById = async (id: string, accessToken: string) => {
    try {
        const result = await axios.get(`${baseUrl}/events/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return result.data.data;
    }
    catch(err) {
        console.log(err);
    }
}

export const getEventsByName = async (name: string, accessToken: string) => {
    try {
        const result = await axios.get(`${baseUrl}/events/eventName/${name}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return result.data.data
    }
    catch(err) {
        console.log(err);
    }
}
