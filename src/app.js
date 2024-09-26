import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import homeRouter from './routes/homeRoute';
import userRouter from './routes/userRoute';
import gptRouter from './routes/gptRoute';
import tokenRouter from './routes/tokenRoute';
import './database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
  }
  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users', userRouter);
    this.app.use('/chat', gptRouter);
    this.app.use('/tokens', tokenRouter);
  }
}

export default new App().app;
