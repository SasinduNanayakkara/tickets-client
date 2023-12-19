export interface Event {
  _id: string;
  eventName: string;
  eventDate: string[];
  venue: string;
  description: string;
  eventType: string;
  ticketPrice: TicketPrice[];
  eventImage: string[];
  category: string;
}

export interface TicketPrice {
  ticketName: string;
  ticketPrice: number;
  ticketQuantity: number;
  _id: string;
}
