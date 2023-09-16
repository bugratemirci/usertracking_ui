import Post from "@/models/Post.model";
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

export const getAllPosts = (page: number) => {
  return instance.get("posts/?page=" + page, {});
};

export const getPostsByUser = (userId: number, page: number, limit: number) => {
  return instance.get("posts/getpostsbyuser/", {
    params: { user_id: userId, page: page, page_size: limit },
  });
};

export const addPost = (userId: number, post: Post) => {
  return instance.post(import.meta.env.VITE_API_URL + "posts/", post, {
    params: { user_id: userId },
  });
};

export const addCommentToPost = (
  userId: number,
  postId: number,
  message: string
) => {
  return axios.post(
    "comments/",
    { message: message },
    {
      params: {
        user_id: userId,
        post_id: postId,
      },
    }
  );
};
