import { Router } from "express";

import { signup, login, reGenerateToken, logout } from "../controllers/auth";
import { auth } from "../middleware/auth";
import { validateReqBody } from "../middleware/validator";
import { getCreateUserSchema } from "../schema/user";

const router = Router();

router.post("/signup", validateReqBody(getCreateUserSchema), signup);

router.post("/login", validateReqBody(getCreateUserSchema), login);

router.post("/refresh", reGenerateToken);

router.post("/logout", auth, logout);

export default router;
