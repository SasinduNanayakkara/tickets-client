import axios from "axios";
import { User } from "../Types/Users";
import { baseUrl } from "./Events";
import { jwtDecode } from "jwt-decode";

export const createUser = async (user: User, accessToken: string) => {
    try {
        const result = await axios.post(`${baseUrl}/users`, {user}, 
        {headers: {Authorization: `Bearer ${accessToken}`}});
        return result;
    }
    catch(err) {
        console.log(err);
    }
}

export const loginUser = async (email: string, password: string, accessToken: string) => {
    try {
        const result = await axios.post(`${baseUrl}/auth/login`, {email, password}, {headers: {Authorization: `Bearer ${accessToken}`}});
        if (result) {
            const decodedToken = jwtDecode(result.data.data.accessToken);
            const userId = decodedToken.sub;
            const roles =  decodedToken.roles[0]
            console.log("user Id ", roles);
            
            return {userId: userId, roles: roles, accessToken: result.data.data.accessToken};
        }
    }
    catch (err) {
        console.log(err);
        return {};
    }
}

export const getUserById = async (id: string) => {
    try {
        const result = await axios.get(`${baseUrl}/users/${id}`);
        if (result) {
            return result.data.data;
        }
    }
    catch(err) {
        console.log(err);
        
    }
}