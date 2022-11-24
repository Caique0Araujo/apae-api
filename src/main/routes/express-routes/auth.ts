import { Router } from "express";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { loginController } from "../../factories/controllers/auth/login";

const router = Router();

router.post('/login', adaptRoute(loginController()))

export {router as authRoutes}