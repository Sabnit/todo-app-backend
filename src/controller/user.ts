import { Request, Response } from "express";

import * as userService from "../service/user";
import { USER_ROUTES } from "../constant/routesInfo";

export const getUserRoutes = (_req: Request, res: Response) => {
  const routesInfo = USER_ROUTES;

  return res.json(routesInfo);
};

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

export const updateUser = async (req: any, res: Response) => {
  const { id } = req.params;

  const user = await userService.updateUserById(parseInt(id));

  if (!user) {
    return res.status(404).json({ message: `User with id: ${id} not found` });
  }

  return res
    .status(200)
    .json({ message: `User with id:${id} updated`, data: user });
};

export const deleteUser = (req: Request, res: Response) => {
  const id = +req.params.id;

  // Call service function to delete the user
  const deletedUser = userService.deleteUser(id);

  if (!deletedUser) {
    return res.status(404).json({ message: `User with id:${id} not found` });
  }

  return res.status(200).json({
    message: `User with ID ${deletedUser.id} has been successfully deleted.`,
  });
};
