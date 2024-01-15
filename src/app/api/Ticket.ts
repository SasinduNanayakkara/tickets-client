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

export const ticketDownload = async (eventImage: string, paymentRef: string, location: string, eventName: string, quantity: number, date: string, time: string, ticketPrice: number, ticketId: string, amount: number, accessToken: string) => {
    try {
        console.log("ok");
        const result = await axios.post(`${baseUrl}/ticket/download`, 
        {eventImage, paymentRef, location, eventName, quantity, date, time, ticketPrice, ticketId, amount}, 
        {headers: {
            Authorization: `Bearer ${accessToken}`
        }, responseType: 'blob'});
        console.log("pdf data ", result);
        
        const url = new Blob([result.data], { type: 'application/pdf' });
        console.log("URL - ", url);
        
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(url);
        link.download = 'Digital-Ticket.pdf';

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger the click event on the link to start the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    }
    catch(err) {
        console.log(err);
    }
}