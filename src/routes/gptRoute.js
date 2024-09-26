import { Router } from 'express';

import gptController from '../controllers/gptController';

const router = new Router();

router.get('/', gptController.getMessage);

export default router;
