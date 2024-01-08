import NotFoundError from "../error/notFoundError";
import { ITodo, QueryTodo } from "../interface/todo";
import TodoModel from "../model/todo";

export async function createTodo(title: string, userId: number) {
  const newTodo: ITodo = {
    title,
    createdBy: userId,
  };
  return TodoModel.createTodo(newTodo);
}

export async function getTodos(userId: number, query: QueryTodo) {
  const { search, completed } = query;

  const todos = await TodoModel.getTodos();

  return todos.filter(
    (todo) =>
      todo.createdBy === userId &&
      (search
        ? todo.title.toLowerCase().includes(search.toLowerCase())
        : true) &&
      (completed ? todo.completed === completed : true)
  );
}

export async function getTodoById(id: number, userId: number) {
  const todo = await TodoModel.getTodoById(id, userId);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} Not Found`);
  }

  return todo;
}

export async function updateTodoById(id: number, userId: number) {
  const todo: ITodo = await TodoModel.getTodoById(id, userId);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} Not Found`);
  }

  todo.completed = !todo.completed;

  await TodoModel.updateTodo(id, todo);

  return todo;
}

export async function deleteTodoById(id: number, userId: number) {
  const todo = TodoModel.getTodoById(id, userId);

  if (!todo) {
    throw new NotFoundError(`Todo with id ${id} Not Found`);
  }

  await TodoModel.deleteTodo(id);
}
