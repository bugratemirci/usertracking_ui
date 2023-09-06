import Photo from "@/models/Photo.model";
import axios from "axios";

export const getPhotosByUser = (userId: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "photos/getphotosbyuser/", {
    params: {
      user_id: userId,
    },
  });
};

export const addPhotoByUser = (userId: number, photo: Photo) => {
  const data = new FormData();
  data.append("title", "deneme");
  data.append("file", photo.file);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: import.meta.env.VITE_API_URL + "photos/?user_id=" + userId,
    headers: { "Content-Type": "multipart/form-data" },
    data: data,
  };
  return axios.request(config);
};

export const getPhotosByAlbum = (albumId: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "photos/getphotosbyalbum/", {
    params: { album_id: albumId },
  });
};
