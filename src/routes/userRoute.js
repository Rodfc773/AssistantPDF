import { Router } from 'express';

import userController from '../controllers/UserController';
import { loginAuthorization } from '../middlewares/loginRequired';

const router = new Router();

router.get('/recovery', userController.show);
router.post('/create', userController.post);
router.put('/update', loginAuthorization, userController.update);

export default router;
