import Todo from "@/models/Todo.model";
import axios from "axios";

export const getAllTodos = (page: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "todos/?page=" + page);
};

export const getTodosByUser = (userId: number, page: number, limit: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "todos/gettodosbyuser/", {
    params: { user_id: userId, page: page, page_size: limit },
  });
};

export const addTodo = (userId: number, todo: Todo) => {
  return axios.post(import.meta.env.VITE_API_URL + "todos/", todo, {
    params: { user_id: userId },
  });
};
