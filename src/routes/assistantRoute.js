import { Router } from 'express';

import assistantController from '../controllers/AssistentController';
import { extractTextFromPDF } from '../middlewares/extractTextPDF';
import { loginAuthorization } from '../middlewares/loginRequired';
import { videoToAudio } from '../middlewares/transformVideoToAudio';
import { audioToText } from '../middlewares/transformAudioToText';

const router = new Router();

router.get('/', loginAuthorization, assistantController.getMessage);
router.post(
  '/upload/pdf',
  loginAuthorization,
  extractTextFromPDF,
  assistantController.sendPDFText,
);
router.post('/uploads/audio', loginAuthorization, videoToAudio, audioToText);

export default router;
