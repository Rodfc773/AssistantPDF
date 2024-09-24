import { Router } from 'express';

import userController from '../controllers/userController';

const router = new Router();

router.get('/recovery', userController.show);
router.post('/', userController.post);
router.put('/update/:id');

export default router;
