import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cback) => {
    if (file.mimetype === 'application/pdf') {
      return cback(null, true);
    }
    return cback(new multer.MulterError('File needs to be a PDF document'));
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads', 'documents'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
