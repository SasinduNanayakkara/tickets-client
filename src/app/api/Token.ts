import axios from "axios";
import { baseUrl } from "./Events";
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const token = await getToken();
        if (token) {
            res.status(200).json({token});
        }
        else {
            res.status(401).json({error: 'Failed to generate access token'});
        }
    }
    catch(err) {
        console.log('Error generating access token: ', err);
        res.status(400).json({error: 'Bad Request'});
    }
}

export const getToken = async () => {
    try {
        const result = await axios.post(`${baseUrl}/auth`, {
            userId: "",
            roles: []
        });
        return result.data.data;
    }
    catch(err) {
        console.log(err);
        return null;
    }
}