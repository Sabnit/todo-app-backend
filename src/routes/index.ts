import { Router } from "express";

import authRoutes from "./auth";
import userRoutes from "./user";
import todoRoutes from "./todo";
import { getRoutesInfo } from "../controller/routesInfo";

import { auth } from "../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

router.use("/todos", todoRoutes);

router.use("/routesInfo", getRoutesInfo);

export default router;
