import { Router } from 'express';
import { adaptRoute } from '../../adapters/expressRoutes/adapter';
import { createUserController } from '../../factories/controllers/user/create';
import { getUserByIdController } from '../../factories/controllers/user/getById';

const router = Router();

router.post('/create', adaptRoute(createUserController()));
router.get('/byId/:id', adaptRoute(getUserByIdController()));

export {router as userRoutes};