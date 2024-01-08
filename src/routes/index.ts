import { Router } from "express";

import authRoutes from "./auth";
import userRoutes from "./user";

import todoRoutes from "./todo";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

router.use("/todos", todoRoutes);

export default router;
