import { Router } from "express";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createProductController } from "../../factories/controllers/product/create";
import { getProductsController } from "../../factories/controllers/product/getAll";
import { getProductByIdController } from "../../factories/controllers/product/getById";

const router = Router();

router.post('/create', adaptRoute(createProductController()));
router.get('/all', adaptRoute(getProductsController()));
router.get('/byId/:id', adaptRoute(getProductByIdController()));

export { router as productRoutes };