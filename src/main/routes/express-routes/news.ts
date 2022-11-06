import { Router } from "express";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createNewsController } from "../../factories/controllers/news/create";
import { getNewsController } from "../../factories/controllers/news/getAll";

const router = Router();

router.post('/create', adaptRoute(createNewsController()));
router.get('/recents/:start/:end', adaptRoute(getNewsController()));

export { router as newsRoutes };