import axios from "axios";

export const getAlbums = () => {
  return axios.get(import.meta.env.VITE_API_URL + "albums/");
};

export const getAlbumByUser = (userId: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "albums/getalbumsbyuser/", {
    params: { user_id: userId },
  });
};
