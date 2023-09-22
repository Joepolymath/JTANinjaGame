import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import 'colors';
import usersRouter from './routes/users.route';
import { authMiddleware } from './middlewares/auth.middleware';
const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/users', usersRouter);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server running good.',
    status: 'success',
  });
});

export default app;
