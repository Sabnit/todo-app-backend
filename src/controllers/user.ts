import { NextFunction, Request, Response } from "express";

import * as userService from "../services/user";

export async function getUsers(req: Request, res: Response) {
  const data = await userService.getUsers();

  return res.json({
    data,
  });
}

export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;

    const data = await userService.getUserById(parseInt(id));

    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
}
