import { Router } from "express";

import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodoById,
} from "../controller/todo";

const router = Router();

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", createTodo);

router.put("/:id", updateTodoById);

router.delete("/:id", deleteTodo);

export default router;
