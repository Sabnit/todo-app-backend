import { Request, Response } from "express";

import * as authService from "../service/auth";

export const signup = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    await authService.signup(body);
    return res.status(200).json({
      message: "Signed up successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Signup failed" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await authService.login(body);
    return res.json(data);
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export async function reGenerateToken(req: Request, res: Response) {
  try {
    const refreshToken = req.body.refreshToken;
    const data = await authService.reGenerateToken(refreshToken);
    return res.json(data);
  } catch (error) {
    return res.status(401).json({ message: "Token regeneration failed" });
  }
}
