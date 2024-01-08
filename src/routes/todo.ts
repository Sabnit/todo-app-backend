import { Router } from "express";

import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodos,
} from "../controller/todo";

const router = Router();

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", createTodo);

router.put("/", updateTodos);

router.delete("/:id", deleteTodo);

export default router;
