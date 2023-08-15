import express, { Router, json } from 'express';
import {
  apiRouter,
  challengeRouter,
  errorRouter,
  sortArrayRouter,
  factorialRouter,
  reverseWordsRouter,
} from './routes';

const app = express();
const port = 3000;

const router = Router();

router.use(json());

router.get('/', apiRouter);
router.get('/challenge', challengeRouter);
router.post('/sortArray', sortArrayRouter);
router.post('/factorial', factorialRouter);
router.post('/reverseWords', reverseWordsRouter);

app.use('/api', router);

app.use('*', errorRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
