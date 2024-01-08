import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import config from "../config";

declare global {
  namespace Express {
    interface Request {
      user?: any; // Define your user property type here
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  // { authorization: "Bearer <token>"}
  const token = req.headers.authorization?.split(" ")[1] as string;

  if (!token) {
    res.status(401).json({ message: "Token not Found" });
    return;
  }

  try {
    const decode = await jwt.verify(token, config.jwt.accessTokenSecret!);

    if (!decode) {
      res.status(401).json({ message: "Invalid Token" });
      return;
    }

    req.user = decode;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
