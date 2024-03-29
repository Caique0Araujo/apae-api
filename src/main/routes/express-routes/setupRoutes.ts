import { Router } from "express";
import { bazarInfoRoutes } from "./bazaar_info";
import { defaultRoutes } from "./default";
import { donationsRoutes } from "./donations";
import { newsRoutes } from "./news";
import { productRoutes } from "./products";
import { userRoutes } from "./user";

const router = Router();

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/bazaar_info', bazarInfoRoutes);
router.use('/news', newsRoutes);
router.use('/donations', donationsRoutes);
router.use('/', defaultRoutes);

export default router;