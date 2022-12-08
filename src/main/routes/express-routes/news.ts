import { Router } from "express";
import { authenticateRoute } from "../../../presentation/middlewares/auth";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createNewsController } from "../../factories/controllers/news/create";
import { getRecentNewsController } from "../../factories/controllers/news/getRecent";
import { getNewsByIdController } from "../../factories/controllers/news/getById";
import { getNewsController } from "../../factories/controllers/news/getNews";
import { deleteNewsController } from "../../factories/controllers/news/delete";

import fileUpload from 'express-fileupload'
import { countNewsController } from "../../factories/controllers/news/count";

const router = Router();

router.get('/byId/:id', adaptRoute(getNewsByIdController())); 
router.get('/recents/:start/:end', adaptRoute(getRecentNewsController()));
router.use(authenticateRoute)
router.get('/count', adaptRoute(countNewsController()))
router.post(
  '/create' ,
  fileUpload({
    limits: {
        fileSize: 30000000, 
    },
    abortOnLimit: true,
  }), 
  adaptRoute(createNewsController())
);

router.get('/getAll', adaptRoute(getNewsController()));
router.delete('/delete/:id', adaptRoute(deleteNewsController()));



export { router as newsRoutes };