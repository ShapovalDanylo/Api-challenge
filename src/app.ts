import express, { Router, json } from 'express';
import {
  apiRouter,
  challengeRouter,
  errorRouter,
  sortRouter,
  factorialRouter,
} from './routes';

const app = express();
const port = 3000;

const router = Router();

router.use(json());

router.get('/', apiRouter);
router.get('/challenge', challengeRouter);
router.post('/sort', sortRouter);
router.post('/factorial', factorialRouter);

app.use('/api', router);

app.use('*', errorRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
