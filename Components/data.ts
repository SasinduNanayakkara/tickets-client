type Event = {
    _id: string;
    eventName: string;
    eventDate: string[],
    venue: string,
    description: string;
    eventType: string;
    ticketPrice: {
        ticketName: string;
        ticketPrice: number;
        ticketQuantity: number;
        _id: string;
    }[];
    eventImage: string[];
    category: string;

}

type Events = Event[];

export const data: Events = [{
    "_id": "656217dd45703ea319f27e27",
    "eventName": "Kuweni The Musical",
    "eventDate": [
        "2023-12-18T13:30:00.000Z",
        "2023-12-19T13:30:00.000Z",
        "2023-12-18T13:30:00.000Z"
    ],
    "venue": "Nelum pokuna Theatre",
    "description": "Kuweni is the concert that showcases all the songs that are composed by Charitha Attalage. The concert was conceived by bringing together a team of unique and talented forces in the entertainment industry of Colombo",
    "eventType": "Musical",
    "ticketPrice": [
        {
            "ticketName": "Gold",
            "ticketPrice": 10000,
            "ticketQuantity": 300,
            "_id": "656227e62f3573f8d8f5d424"
        },
        {
            "ticketName": "Silver",
            "ticketPrice": 5000,
            "ticketQuantity": 500,
            "_id": "656227e62f3573f8d8f5d425"
        },
        {
            "ticketName": "Platinum",
            "ticketPrice": 15000,
            "ticketQuantity": 200,
            "_id": "656227e62f3573f8d8f5d426"
        }
    ],
    "eventImage": [
        "https://i.ytimg.com/vi/cFfiaNHuyFY/maxresdefault.jpg"
    ],
    "category": "Concert",
},
{
    "_id": "656217dd45703ea319f27e27",
    "eventName": "Kuweni The Musical",
    "eventDate": [
        "2023-12-18T13:30:00.000Z",
        "2023-12-19T13:30:00.000Z",
        "2023-12-18T13:30:00.000Z"
    ],
    "venue": "Nelum pokuna Theatre",
    "description": "Kuweni is the concert that showcases all the songs that are composed by Charitha Attalage. The concert was conceived by bringing together a team of unique and talented forces in the entertainment industry of Colombo",
    "eventType": "Musical",
    "ticketPrice": [
        {
            "ticketName": "Gold",
            "ticketPrice": 10000,
            "ticketQuantity": 300,
            "_id": "656227e62f3573f8d8f5d424"
        },
        {
            "ticketName": "Silver",
            "ticketPrice": 5000,
            "ticketQuantity": 500,
            "_id": "656227e62f3573f8d8f5d425"
        },
        {
            "ticketName": "Platinum",
            "ticketPrice": 15000,
            "ticketQuantity": 200,
            "_id": "656227e62f3573f8d8f5d426"
        }
    ],
    "eventImage": [
        "https://mytickets.lk/contents/events/thumb/DES%2003%20THUMB.jpg"
    ],
    "category": "Concert",
},
{
    "_id": "656217dd45703ea319f27e27",
    "eventName": "Kuweni The Musical",
    "eventDate": [
        "2023-12-18T13:30:00.000Z",
        "2023-12-19T13:30:00.000Z",
        "2023-12-18T13:30:00.000Z"
    ],
    "venue": "Nelum pokuna Theatre",
    "description": "Kuweni is the concert that showcases all the songs that are composed by Charitha Attalage. The concert was conceived by bringing together a team of unique and talented forces in the entertainment industry of Colombo",
    "eventType": "Musical",
    "ticketPrice": [
        {
            "ticketName": "Gold",
            "ticketPrice": 10000,
            "ticketQuantity": 300,
            "_id": "656227e62f3573f8d8f5d424"
        },
        {
            "ticketName": "Silver",
            "ticketPrice": 5000,
            "ticketQuantity": 500,
            "_id": "656227e62f3573f8d8f5d425"
        },
        {
            "ticketName": "Platinum",
            "ticketPrice": 15000,
            "ticketQuantity": 200,
            "_id": "656227e62f3573f8d8f5d426"
        }
    ],
    "eventImage": [
        "https://uploads-ssl.webflow.com/63f1acb20b3cfe7ae5172180/63f1bda6a2038a2192715570_icon-512.jpg"
    ],
    "category": "Concert",
}]