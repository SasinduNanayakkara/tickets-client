import axios from "axios";
import { baseUrl } from "./Events";

export const createPayment = async (eventId: string, ticketPrice: string, quantity:number, userId:string) => {
    try {
        console.log("pay params - ", eventId, ticketPrice, quantity, userId);
        
        const result = await axios.post(`${baseUrl}/payment`, {eventId, ticketPrice, quantity, userId});
        if (result) {
             return result;
        }
    }
    catch(err) {
        console.log(err);
    }
}