import { Router } from "express";

import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
} from "../controllers/todo";
import { validateReqBody, validateReqQuery } from "../middleware/validator";
import { getCreateTaskSchema, getTaskQuerySchema } from "../schema/todo";

const router = Router();

router.post("/", validateReqBody(getCreateTaskSchema), createTodo);

router.get("/", validateReqQuery(getTaskQuerySchema), getTodos);

router.get("/:id", getTodoById);

router.put("/:id", updateTodoById);

router.delete("/:id", deleteTodoById);

export default router;
