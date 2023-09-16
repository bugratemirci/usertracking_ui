import User from "@/models/User.model";
import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("access_token");
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export const getUserById = (userId: number) => {
  return instance.get("users/" + userId, {});
};

export const getAnotherUsers = (userId: number) => {
  return instance.get("users/getanotherusers/", {
    params: { user_id: userId },
  });
};

export const heartbeat = () => {
  const token = localStorage.getItem("access_token");
  return instance.post("users/heartbeat/", { token: token });
};

export const register = (user: User) => {
  return instance.post("users/register/", user);
};
