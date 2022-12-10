import  fileUpload  from 'express-fileupload';
import { Router } from "express";
import { authenticateRoute } from "../../../presentation/middlewares/auth";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createProductController } from "../../factories/controllers/product/create";
import { getProductsController } from "../../factories/controllers/product/getAll";
import { getProductByIdController } from "../../factories/controllers/product/getById";
import { countProductsController } from '../../factories/controllers/product/count';
import { deleteProductController } from '../../factories/controllers/product/delete';
import { updateProductController } from '../../factories/controllers/product/update';

const router = Router();

const fileUpload_options = {
  limits: {
      fileSize: 20000000, 
  },
  abortOnLimit: true,
}

router.get('/getAll', adaptRoute(getProductsController()));
router.get('/byId/:id', adaptRoute(getProductByIdController()));
router.use(authenticateRoute);
router.get('/count', adaptRoute(countProductsController()));
router.delete('/delete/:id', adaptRoute(deleteProductController()));
router.put('/update', fileUpload(fileUpload_options), adaptRoute(updateProductController()));
router.post('/create' , fileUpload(fileUpload_options), adaptRoute(createProductController()));
export { router as productRoutes };