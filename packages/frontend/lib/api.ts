import axios from "axios";
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
