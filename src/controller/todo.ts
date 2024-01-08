import { Request, Response } from "express";

import * as todoService from "../service/todo";

export const getTodos = (req: Request, res: Response) => {
  try {
    const params = req.query;
    const data = todoService.getTodos(params);
    return res
      .status(200)
      .json({ message: `${data.length} todos retrieved`, data });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch todos" });
  }
};

export const getTodoById = (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const data = todoService.getTodoById(id);
    if (!data) {
      return res.status(404).json({ message: `Todo with id:${id} not found` });
    }
    return res.status(200).json({ message: `Todo with id:${id} found`, data });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch the todo" });
  }
};

export const createTodo = (req: Request, res: Response) => {
  try {
    const todoData = req.body;
    const newTodo = todoService.createTodo(todoData);
    return res
      .status(201)
      .json({ message: "Todo added successfully", data: newTodo });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create a new todo" });
  }
};

export async function updateTodoById(req: any, res: Response) {
  try {
    const { id } = req.params;
    const todo = await todoService.updateTodoById(parseInt(id));
    if (!todo) {
      return res.status(404).json({ message: `Todo with id: ${id} not found` });
    }
    return res
      .status(200)
      .json({ message: `Todo with id:${id} updated`, data: todo });
  } catch (error) {
    return res.status(500).json({ message: "Failed to update the todo" });
  }
}

export const deleteTodo = (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const deletedTodo = todoService.deleteTodo(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: `Todo with id:${id} not found` });
    }
    return res.status(200).json({
      message: `Todo with ID ${deletedTodo.id} - '${deletedTodo.title}' has been successfully deleted.`,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete the todo" });
  }
};
