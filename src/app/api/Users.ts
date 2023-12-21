import axios from "axios";
import { User } from "../Types/Users";
import { baseUrl } from "./Events";

export const createUser = async (user: User) => {
    try {
        const result = await axios.post(`${baseUrl}/users`, {user});
        return result;
    }
    catch(err) {
        console.log(err);
    }
}

export const loginUser = async (email: string, password: string) => {
    try {
        const result = await axios.post(`${baseUrl}/auth/login`, {email, password});
        return result;
    }
    catch (err) {
        console.log(err);
    }
}