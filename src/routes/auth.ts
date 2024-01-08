import { Router } from "express";
import { login, signup, reGenerateToken } from "../controller/auth";

import { validateReqBody } from "../middleware/validator";
import { getCreateUserSchema, getUserSchema } from "../schema/user";

const router = Router();

router.post("/signup", validateReqBody(getCreateUserSchema), signup);

router.post("/login", validateReqBody(getUserSchema), login);

router.post("/refresh", reGenerateToken);

export default router;
