import axios from "axios";

export const getUserById = (userId: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "users/getuserbyid/", {
    params: { user_id: userId },
  });
};

export const getAnotherUsers = (userId: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "users/getanotherusers/", {
    params: { user_id: userId },
  });
};
