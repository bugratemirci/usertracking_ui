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

export const getAlbums = () => {
  return instance.get("albums/", {});
};

export const getAlbumByUser = (userId: number) => {
  return instance.get(
    import.meta.env.VITE_API_URL + "albums/getalbumsbyuser/",
    {
      params: { user_id: userId },
    }
  );
};

export const addAlbumByUser = (userId: number, album: any) => {
  return instance.post("albums/", album, {
    params: { user_id: userId },
  });
};

export const addPhotoToAlbum = (photoId: number, albumId: number) => {
  return instance.put("albums/addphototoalbum/", null, {
    params: { photo_id: photoId, album_id: albumId },
  });
};
export const deletePhotoFromAlbum = (photoId: number, albumId: number) => {
  return instance.put("albums/removephotofromalbum/", null, {
    params: { photo_id: photoId, album_id: albumId },
  });
};
