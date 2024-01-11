import axios from "axios";
import { User } from "../Types/Users";
import { baseUrl } from "./Events";
import { jwtDecode } from "jwt-decode";

type decodedTokenType = {
    sub: string;
    roles: string[];
}

export const createUser = async (firstName: string, lastName:string, email:string, phone:string, NIC: string, address:string, password:string , accessToken: string) => {
    try {
        const result = await axios.post(`${baseUrl}/users`, {firstName: firstName, lastName: lastName, email: email, phone: phone, NIC: NIC, address: address, password: password}, 
        {headers: {Authorization: `Bearer ${accessToken}`}});
        return result;
    }
    catch(err) {
        console.log(err);
        return {data: {message: 'User creation unsuccessful'}, status: 400};
    }
}

export const loginUser = async (email: string, password: string, accessToken: string) => {
    try {
        const result = await axios.post(`${baseUrl}/auth/login`, {email, password}, {headers: {Authorization: `Bearer ${accessToken}`}});
        if (result) {
            const decodedToken: decodedTokenType = jwtDecode(result.data.data.accessToken);
            const userId = decodedToken.sub;
            const roles =  decodedToken.roles[0];
            const refreshToken = result.data.data.refreshToken;
            console.log("user Id ", roles);
            
            return {userId: userId, roles: roles, accessToken: result.data.data.accessToken, refreshToken: refreshToken};
        }
    }
    catch (err) {
        console.log(err);
        return {data: {message: 'Login unsuccessful'}, status: 400};
    }
}

export const refreshTokenAccess = async (role: string, refreshToken: string) => {
    try {
        const result = await axios.post(`${baseUrl}/refresh`, {roles: [role], refreshToken: refreshToken});
        if (result) {
            return result;
        }
    }
    catch (err) {
        console.log(err);
        return {data: {message: 'Refresh Token Access unsuccessful'}, status: 400};
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