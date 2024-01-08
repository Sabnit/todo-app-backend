import { Request, Response } from "express";

import * as userService from "../service/user";

export const getUsers = (req: Request, res: Response) => {
  const params = req.query;

  const data = userService.getUsers(params);

  return res.json({
    data,
  });
};

export const getUserById = (req: Request, res: Response) => {
  const id = +req.params.id;

  const data = userService.getUserById(id);

  return res.json({
    data,
  });
};

export const createUser = (req: Request, res: Response) => {
  const userData = req.body;
  const newUser = userService.createUser(userData);
  return res.status(201).json({ data: newUser });
};

export const updateUser = () => {};

export const deleteUser = () => {};
