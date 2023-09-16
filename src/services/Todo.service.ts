import Todo from "@/models/Todo.model";
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
export const getAllTodos = (page: number) => {
  return instance.get("todos/?page=" + page, {});
};

export const getTodosByUser = (userId: number, page: number, limit: number) => {
  return instance.get("todos/gettodosbyuser/", {
    params: { user_id: userId, page: page, page_size: limit },
  });
};

export const addTodo = (userId: number, todo: Todo) => {
  return instance.post("todos/", todo, {
    params: { user_id: userId },
  });
};

export const setTodoCompleted = (todoId: number) => {
  return instance.put("todos/settodotocomplete/", null, {
    params: { todo_id: todoId },
  });
};
