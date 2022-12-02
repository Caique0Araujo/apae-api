import { Router } from "express";
import { authenticateRoute } from "../../../presentation/middlewares/auth";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createProductController } from "../../factories/controllers/product/create";
import { getProductsController } from "../../factories/controllers/product/getAll";
import { getProductByIdController } from "../../factories/controllers/product/getById";

const router = Router();

router.get('/all', adaptRoute(getProductsController()));
router.get('/byId/:id', adaptRoute(getProductByIdController()));
router.use(authenticateRoute)
router.post('/create', adaptRoute(createProductController()));

export { router as productRoutes };