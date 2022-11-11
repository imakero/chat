import axios from "axios";
import { Message } from "./types";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

axios.defaults.withCredentials = true;

type Credentials = {
  username: string;
  password: string;
};

export const login = async (credentials: Credentials) => {
  try {
    await axios.post("/auth/login", credentials);
    return true;
  } catch (error) {
    return false;
  }
};

type RegisterParams = {
  username: string;
  email: string;
  password: string;
};

export const register = async (userDetails: RegisterParams) => {
  const res = await axios.post("/users", userDetails);
  return res.data;
};

export const getMessages = async () => {
  try {
    const res = await axios.get<Message[]>("/messages", {});
    return res.data;
  } catch (error) {
    throw error;
  }
};

type messageParams = {
  text: string;
};

export const sendMessage = async (message: messageParams) => {
  try {
    const res = await axios.post<Message>("/messages", message);
    return res.data;
  } catch (error) {
    throw error;
  }
};
