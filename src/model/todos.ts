import { ITodo } from "../interface/todo";

const todos: ITodo[] = [
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    completed: false,
  },
];

export const getTodos = (params: any) => {
  let data = todos;

  if (params.title) {
    data = data.filter(({ title }) => title === params.title);
  }

  return data;
};

export const getTodoById = (id: number) => {
  const todo = todos.find(({ id: todoId }) => todoId === id);

  return todo;
};

export const addTodo = (todoData: any) => {
  const newTodo = {
    id: todos.length + 1,
    ...todoData,
  };

  todos.push(newTodo);
  return newTodo;
};

export function updateTodoById(id: number) {
  const todo = getTodoById(id);
  if (!todo) return null;

  todo.completed = !todo.completed;

  return todo;
}

export const deleteTodo = (id: number) => {
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1)[0];
    return deletedTodo;
  }

  return null;
};
