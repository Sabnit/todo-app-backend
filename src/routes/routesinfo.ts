import { Router } from "express";
import { getRoutesInfo } from "../controller/routesInfo";

const router = Router();

router.get("/", getRoutesInfo);

export default router;
