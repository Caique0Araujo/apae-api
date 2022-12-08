import  fileUpload  from 'express-fileupload';
import { Router } from "express";
import { authenticateRoute } from "../../../presentation/middlewares/auth";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createProductController } from "../../factories/controllers/product/create";
import { getProductsController } from "../../factories/controllers/product/getAll";
import { getProductByIdController } from "../../factories/controllers/product/getById";
import { countProductsController } from '../../factories/controllers/product/count';

const router = Router();

router.get('/all', adaptRoute(getProductsController()));
router.get('/byId/:id', adaptRoute(getProductByIdController()));
router.use(authenticateRoute)
router.get('/count', adaptRoute(countProductsController()))
router.post(
  '/create' ,
  fileUpload({
    limits: {
        fileSize: 30000000, 
    },
    abortOnLimit: true,
  }), 
  adaptRoute(createProductController())
);
export { router as productRoutes };