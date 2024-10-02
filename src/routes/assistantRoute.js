import { Router } from 'express';

import assistantController from '../controllers/AssistentController';
import { extractTextFromPDF } from '../middlewares/extractTextPDF';
import { loginAuthorization } from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginAuthorization, assistantController.getMessage);
router.post(
  '/upload',
  loginAuthorization,
  extractTextFromPDF,
  assistantController.sendPDFText,
);

export default router;
