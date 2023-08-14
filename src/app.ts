import express, { Router } from 'express';
import {
  apiRouter,
  challengeRouter,
  errorRouter,
} from './routes';

const app = express();
const port = 3000;

const router = Router();
router.get('/', apiRouter);
router.get('/challenge', challengeRouter);

app.use('/api', router);

app.use('*', errorRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
