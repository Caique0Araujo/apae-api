import { Router } from "express";
import { authenticateRoute } from "../../../presentation/middlewares/auth";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createDonationController } from "../../factories/controllers/donation/create";
import { getDonationController } from "../../factories/controllers/donation/getAll";

const router = Router();

router.get('/all', adaptRoute(getDonationController()));
router.use(authenticateRoute)
router.post('/create', adaptRoute(createDonationController()));

export { router as donationsRoutes };