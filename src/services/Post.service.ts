import Post from "@/models/Post.model";
import axios from "axios";

export const getAllPosts = (page: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "posts/?page=" + page);
};

export const getPostsByUser = (userId: number, page: number, limit: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "posts/getpostsbyuser/", {
    params: { user_id: userId, page: page, page_size: limit },
  });
};

export const addPost = (userId: number, post: Post) => {
  return axios.post(import.meta.env.VITE_API_URL + "posts/", post, {
    params: { user_id: userId },
  });
};
