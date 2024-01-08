import NotFoundError from "../error/notFoundError";

import * as todoModel from "../model/todos";

export const createTodo = (todoData: any) => {
  const newTodo = todoModel.addTodo(todoData);
  return newTodo;
};

export const getTodos = (params: object) => {
  const todo = todoModel.getTodos(params);

  if (!todo) {
    throw new NotFoundError(`Todo is empty`);
  }

  return todo;
};

export const getTodoById = (id: number) => {
  const todo = todoModel.getTodoById(id);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} Not Found`);
  }

  return todo;
};

export async function updateTodoById(id: number) {
  const todo = todoModel.updateTodoById(id);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} not found`);
  }

  return todo;
}

export const deleteTodo = (id: number) => {
  const deletedTodo = todoModel.deleteTodo(id);

  if (!deleteTodo) {
    throw new NotFoundError(`Todo with id ${id} Not Found`);
  }

  return deletedTodo;
};
