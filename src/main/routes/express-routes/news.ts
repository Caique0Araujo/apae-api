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
router.get('/recents',
fileUpload({
  limits: {
      fileSize: 5000000, 
  },
  abortOnLimit: true,
}),  adaptRoute(getRecentNewsController()));
router.get('/count', adaptRoute(countNewsController()), authenticateRoute)
router.post(
  '/create' ,
  fileUpload({
    limits: {
        fileSize: 5000000, 
    },
    abortOnLimit: true,
  }), 
  adaptRoute(createNewsController())
);

router.get('/getAll', adaptRoute(getNewsController()), authenticateRoute);
router.delete('/delete/:id', adaptRoute(deleteNewsController()), authenticateRoute);



export { router as newsRoutes };