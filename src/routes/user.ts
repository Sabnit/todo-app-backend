import { Router } from "express";

import {
  deleteUser,
  getUserById,
  getUserRoutes,
  getUsers,
  updateUser,
} from "../controller/user";

const router = Router();

router.get("/", getUsers);

router.get("/routesinfo", getUserRoutes);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
