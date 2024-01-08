const todos = [
  {
    id: 1,
    task: "Do Assignment",
  },
];

export const getTodos = (params: any) => {
  let data = todos;

  if (params.task) {
    data = data.filter(({ task }) => task === params.task);
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

export const deleteTodo = (id: number) => {
  const index = todos.findIndex((task) => task.id === id);

  if (index !== -1) {
    const deletedTask = todos.splice(index, 1)[0];
    return deletedTask;
  }

  return null;
};
