import { Router } from 'express';

import assistantControllerController from '../controllers/AssistentController';

const router = new Router();

router.get('/', assistantControllerController.getMessage);

export default router;
