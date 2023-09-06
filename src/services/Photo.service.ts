import Photo from "@/models/Photo.model";
import axios from "axios";
import * as fs from "fs";

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
    url: "http://localhost:8000/photos/?user_id=" + userId,
    headers: { "Content-Type": "multipart/form-data" },
    data: data,
  };
  return axios.request(config);
};
