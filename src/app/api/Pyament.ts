import axios from "axios";
import { baseUrl } from "./Events";

export const createPayment = async (eventId: string, ticketPrice: string, quantity:number, userId:string, date: string, time: string, location: string, accessToken: string) => {
    try {
        console.log("pay params - ", eventId, ticketPrice, quantity, userId, date, time, location);
        
        const result = await axios.post(`${baseUrl}/payment`, {eventId, ticketPrice, quantity, userId, date, time, location}, {headers: {
            Authorization: `Bearer ${accessToken}`
        }});
        if (result) {
             return result;
        }
    }
    catch(err) {
        console.log(err);
    }
}

export const updatePaymentStatus = async (paymentId: string, ticketId: string, accessToken: string) => {
    try {
        const result = await axios.put(`${baseUrl}/payment/status`, {paymentId, ticketId}, {headers: {
            Authorization: `Bearer ${accessToken}`
        }});
        return result.data.data;
    }
    catch(err) {
        console.log(err);
    }
}