import express, { Router, json } from 'express';
import {
  apiRouter,
  challengeRouter,
  errorRouter,
  sortArrayRouter,
  factorialRouter,
  reverseWordsRouter,
  fibonacciSequenceRouter,
  numbersRouter,
  numbersInRangeRouter,
  numberByIdRouter,
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
router.post('/fibonacciSequence', fibonacciSequenceRouter);
router.post('/generate', numbersRouter);
router.post('/numbersInRange', numbersInRangeRouter);
router.post('/numberById', numberByIdRouter);

app.use('/api', router);

app.use('*', errorRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
