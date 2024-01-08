import * as userModel from "../model/todos";

export const getTodos = (params: object) => {
  const data = userModel.getTodos(params);

  return data;
};

export const getTodoById = (id: number) => {
  const data = userModel.getTodoById(id);

  return data;
};

export const createTodo = (todoData: any) => {
  const newTodo = userModel.addTodo(todoData);
  return newTodo;
};

export const deleteTodo = (id: number) => {
  // Delete the user based on the provided ID
  const deletedUser = userModel.deleteTodo(id);
  return deletedUser;
};
