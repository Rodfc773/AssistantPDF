import express from 'express';

import homeRouter from './routes/homeRoute';
import userRouter from './routes/userRoute';

class App {
  constructor() {
    this.app = express();

    this.routes();
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users', userRouter);
  }
}

export default new App().app;
