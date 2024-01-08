import { Request, Response } from "express";
import { TOP_LEVEL_ROUTES } from "../constant/routesInfo";

export const getRoutesInfo = (_req: Request, res: Response) => {
  const routesInfo = TOP_LEVEL_ROUTES;

  return res.json(routesInfo);
};
