import { Router } from "express";

import authRoutes from "./auth";
import userRoutes from "./user";
import todoRoutes from "./todo";
import { auth } from "../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/todos", auth, todoRoutes);

export default router;
