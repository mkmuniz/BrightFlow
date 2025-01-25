import logger from 'morgan';
import { Request, Response } from 'express';

import authRouter from './modules/auth/auth.routes';
import userRouter from './modules/user/user.routes';
import billetRouter from './modules/billet/billet.routes';

const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: "Api is working, good job :)"
  });
});

app.use(logger('dev'));
app.use(cors({ origin: ['http://localhost:3000', 'https://www.brightflow.com.br', 'https://brightflow.vercel.app'  ] }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/api/v1', userRouter);
app.use('/api/v1', authRouter);
app.use('/api/v1', billetRouter);

export default app;