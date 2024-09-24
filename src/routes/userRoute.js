import { Router } from 'express';

import userController from '../controllers/userController';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.post);

export default router;
