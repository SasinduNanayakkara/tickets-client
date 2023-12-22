import axios from 'axios';

// export const baseUrl = 'https://tickets-backend-sasindunanayakkara.vercel.app/api/v1';
export const baseUrl = "http://localhost:5000/api/v1";

export const getEvents = async () => {
    try {
        const result = await axios.get(`${baseUrl}/events`, {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }});
        return result.data.data;
    }
    catch(err) {
        console.log(err);
    }
}

export const getEventTypeData = async (eventType: string) => {
    try {
        const result = await axios.get(`${baseUrl}/events/eventType/${eventType}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return result.data.data
    }
    catch(err) {
        console.log(err);
    }
}

export const getEventsById = async (id: string) => {
    try {
        const result = await axios.get(`${baseUrl}/events/${id}`);
        return result.data.data;
    }
    catch(err) {
        console.log(err);
    }
}

