import { Request, Response } from "express";

import * as authService from "../service/auth";
import { error } from "console";
import { addUser } from "../model/users";

export const signup = async (req: Request, res: Response) => {
  const body = req.body;
  // console.log(body);
  await authService.signup(body);

  return res.json({
    message: "Signed up successfully",
  });
};

export const login = async (req: Request, res: Response) => {
  const body = req.body;

  const data = await authService.login(body);

  return res.json(data);
};
