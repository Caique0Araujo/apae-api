import { Router } from "express";
import { defaultRoutes } from "./default";

const router = Router();

router.use('/', defaultRoutes);

export default router;