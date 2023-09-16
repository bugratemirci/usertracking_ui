import Photo from "@/models/Photo.model";
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

export const getPhotosByUser = (userId: number) => {
  return instance.get("photos/getphotosbyuser/", {
    params: {
      user_id: userId,
    },
  });
};

export const addPhotoByUser = (userId: number, photo: Photo) => {
  const data = new FormData();
  data.append("title", "deneme");
  data.append("file", photo.file);

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "photos/?user_id=" + userId,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  return instance.request(config);
};

export const getPhotosByAlbum = (albumId: number) => {
  return instance.get("photos/getphotosbyalbum/", {
    params: { album_id: albumId },
  });
};

export const deletePhoto = (photo_id: number) => {
  return instance.delete("photos/deletephoto/", {
    params: { photo_id: photo_id },
  });
};
