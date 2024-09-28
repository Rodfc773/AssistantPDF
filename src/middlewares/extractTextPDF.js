import PDF from 'pdf-parse';
import fs from 'fs';
import multer from 'multer';

import path from 'path';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('file');

export function extractTextFromPDF(req, res, next) {
  return upload(req, res, async (error) => {
    if (error) {
      return res.status(400).json({ errors: [error.code] });
    }

    try {
      const file = req.file;

      console.log(file);

      if (file) {
        const filePath = path.resolve(file.path);
        const dataBuffer = fs.readFileSync(filePath);

        const fileData = await PDF(dataBuffer); // Aguarda a resolução da Promise

        req.extractedText = fileData.text;

        return next();
      }

      return res.status(400).json({ errors: ['There are no file'] });
    } catch (e) {
      return res.status(400).json({ errors: [e.code] });
    }
  });
}
