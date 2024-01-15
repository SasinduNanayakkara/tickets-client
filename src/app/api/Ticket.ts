import axios from "axios";
import { baseUrl } from "./Events";

export const getTicketData = async (id:string, accessToken:string) => {
    try {
        const result = await axios.get(`${baseUrl}/ticket/${id}`, {headers: {
            Authorization: `Bearer ${accessToken}`
        }});
        return result.data.data;
    }
    catch(err) {
        console.log(err);
    }
}