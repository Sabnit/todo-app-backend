import { Router } from "express";
import { login, signup } from "../controller/auth";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/refresh");

export default router;
