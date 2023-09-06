import axios from "axios";

export const getAlbums = () => {
  return axios.get(import.meta.env.VITE_API_URL + "albums/");
};

export const getAlbumByUser = (userId: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "albums/getalbumsbyuser/", {
    params: { user_id: userId },
  });
};

export const addAlbumByUser = (userId: number, album: any) => {
  return axios.post(import.meta.env.VITE_API_URL + "albums/", album, {
    params: { user_id: userId },
  });
};

export const addPhotoToAlbum = (photoId: number, albumId: number) => {
  return axios.put(
    import.meta.env.VITE_API_URL + "albums/addphototoalbum/",
    null,
    {
      params: { photo_id: photoId, album_id: albumId },
    }
  );
};
