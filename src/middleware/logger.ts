import { Request, Response, NextFunction } from "express";
import loggerWithNameSpace from "../util/logger";

const loggerFn = loggerWithNameSpace("Logger");

export async function logger(req: Request, _res: Response, next: NextFunction) {
  loggerFn.info(`${req.method}: ${req.path}`);

  next();
}
