import { Router } from "express";
import { authenticateRoute } from "../../../presentation/middlewares/auth";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createBazaarController } from "../../factories/controllers/bazaar-info/create";
import { getBazaarInfoController } from "../../factories/controllers/bazaar-info/getAll";

const router = Router();

router.get('/all', adaptRoute(getBazaarInfoController()));
router.use(authenticateRoute)
router.post('/create', adaptRoute(createBazaarController()));

export { router as bazarInfoRoutes };