import axios from "axios";
import { Message } from "./types";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

type Credentials = {
  username: string;
  password: string;
};

type ResponsePayload = {
  access_token: string;
};

export const login = async (credentials: Credentials) => {
  try {
    const res = await axios.post<ResponsePayload>("/auth/login", credentials);
    localStorage.setItem("chat-jwt-token", res.data.access_token);
    return true;
  } catch (error) {
    return false;
  }
};

export const getMessages = async () => {
  try {
    const token = localStorage.getItem("chat-jwt-token");

    if (!token) {
      return null;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const res = await axios.get<Message[]>("/messages", { headers });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};