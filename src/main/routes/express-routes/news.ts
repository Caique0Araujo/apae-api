import { Router } from "express";
import { authenticateRoute } from "../../../presentation/middlewares/auth";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createNewsController } from "../../factories/controllers/news/create";
import { getNewsController } from "../../factories/controllers/news/getAll";
import { getNewsByIdController } from "../../factories/controllers/news/getById";

const router = Router();

router.get('/byId/:id', adaptRoute(getNewsByIdController())); 
router.get('/recents/:start/:end', adaptRoute(getNewsController()));
router.use(authenticateRoute)
router.post('/create', adaptRoute(createNewsController()));

export { router as newsRoutes };