import HttpStatus from "http-status-codes";
import { NextFunction, Request, Response } from "express";

import * as todoService from "../services/todo";

export async function createTodo(req: any, res: Response) {
  const { title } = req.body;
  const user = req.user;

  await todoService.createTodo(title, user.id);

  res.status(HttpStatus.CREATED).json({
    message: "Todo created successfully",
  });
}

export async function getTodos(req: any, res: Response) {
  const query = req.query;
  const user = req.user;
  const todos = await todoService.getTodos(user.id, query);

  res.json(todos);
}

export async function getTodoById(req: any, res: Response, next: NextFunction) {
  try {
    const user = req.user;
    const { id } = req.params;

    const todo = await todoService.getTodoById(parseInt(id), user.id);

    res.json(todo);
  } catch (error) {
    next(error);
  }
}

export async function updateTodoById(
  req: any,
  res: Response,
  next: NextFunction
) {
  try {
    const user = req.user;
    const { id } = req.params;

    const todo = await todoService.updateTodoById(parseInt(id), user.id);

    res.json(todo);
  } catch (error) {
    next(error);
  }
}

export async function deleteTodoById(
  req: any,
  res: Response,
  next: NextFunction
) {
  try {
    const user = req.user;
    const { id } = req.params;

    const todo = await todoService.deleteTodoById(parseInt(id), user.id);

    res.json({
      message: "Todo deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
