import { Router } from "express";
import { adaptRoute } from "../../adapters/expressRoutes/adapter";
import { createDonationController } from "../../factories/controllers/donation/create";
import { getDonationController } from "../../factories/controllers/donation/getAll";

const router = Router();

router.post('/create', adaptRoute(createDonationController()));
router.get('/all', adaptRoute(getDonationController()));

export { router as donationsRoutes };