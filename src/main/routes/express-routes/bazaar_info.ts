import { Router } from "express";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createBazaarController } from "../../factories/controllers/bazaar-info/create";
import { getBazaarInfoController } from "../../factories/controllers/bazaar-info/getAll";

const router = Router();

router.post('/create', adaptRoute(createBazaarController()));
router.get('/all', adaptRoute(getBazaarInfoController()));

export { router as bazarInfoRoutes };