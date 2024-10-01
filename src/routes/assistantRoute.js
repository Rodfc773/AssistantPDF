import { Router } from 'express';

import assistantController from '../controllers/AssistentController';
import { extractTextFromPDF } from '../middlewares/extractTextPDF';

const router = new Router();

router.get('/', assistantController.getMessage);
router.post('/upload', extractTextFromPDF, assistantController.sendPDFText);

export default router;
