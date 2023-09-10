import User from "@/models/User.model";
import axios from "axios";

export const getUserById = (userId: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "users/" + userId, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
};

export const getAnotherUsers = (userId: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "users/getanotherusers/", {
    params: { user_id: userId },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
};

export const heartbeat = () => {
  const token = localStorage.getItem("access_token");
  return axios.post("http://localhost:8000/users/heartbeat/", { token: token });
};

export const register = (user: User) => {
  return axios.post("http://localhost:8000/users/register/", user);
};
