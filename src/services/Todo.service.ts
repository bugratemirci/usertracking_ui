import Todo from "@/models/Todo.model";
import axios from "axios";

export const getAllTodos = (page: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "todos/?page=" + page, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
};

export const getTodosByUser = (userId: number, page: number, limit: number) => {
  return axios.get(import.meta.env.VITE_API_URL + "todos/gettodosbyuser/", {
    params: { user_id: userId, page: page, page_size: limit },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
};

export const addTodo = (userId: number, todo: Todo) => {
  return axios.post(import.meta.env.VITE_API_URL + "todos/", todo, {
    params: { user_id: userId },
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  });
};

export const setTodoCompleted = (todoId: number) => {
  return axios.put(
    import.meta.env.VITE_API_URL + "todos/settodotocomplete/",
    null,
    {
      params: { todo_id: todoId },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }
  );
};
