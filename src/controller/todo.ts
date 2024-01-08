import { Request, Response } from "express";

import * as todoService from "../service/todo";
import { todo } from "node:test";

export const getTodos = (req: Request, res: Response) => {
  const params = req.query;

  const data = todoService.getTodos(params);

  return res.json({
    data,
  });
};

export const getTodoById = (req: Request, res: Response) => {
  const id = +req.params.id;

  const data = todoService.getTodoById(id);

  return res.json({
    data,
  });
};

export const createTodo = (req: Request, res: Response) => {
  const todoData = req.body;

  const newTodo = todoService.createTodo(todoData);

  return res.status(201).json({ data: newTodo });
};

export const updateTodos = () => {};

export const deleteTodo = (req: Request, res: Response) => {
  const id = +req.params.id;

  // Call service function to delete the user
  const deletedTask = todoService.deleteTodo(id);

  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.json({ message: "Task deleted successfully" });
};
