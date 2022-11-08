import { Router } from "express";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createNewsController } from "../../factories/controllers/news/create";
import { getNewsController } from "../../factories/controllers/news/getAll";
import { getNewsByIdController } from "../../factories/controllers/news/getById";

const router = Router();

router.post('/create', adaptRoute(createNewsController()));
router.get('/byId/:id', adaptRoute(getNewsByIdController())); 
router.get('/recents/:start/:end', adaptRoute(getNewsController()));

export { router as newsRoutes };