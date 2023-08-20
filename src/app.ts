require('dotenv').config();
import express, { Router, json } from 'express';
import {
  apiRouter,
  challengeRouter,
  errorRouter,
  sortArrayRouter,
  factorialRouter,
  reverseWordsRouter,
  fibonacciSequenceRouter,
  ProductsRouter,
  productsInRangeRouter,
  productByIdRouter,
  apiCallsRouter,
} from './routes';

const app = express();
const port = process.env.APP_PORT || 3000;

const router = Router();

router.use(json());

router.get('/', apiRouter);
router.get('/challenge', challengeRouter);
router.post('/sortArray', sortArrayRouter);
router.post('/factorial', factorialRouter);
router.post('/reverseWords', reverseWordsRouter);
router.post('/fibonacciSequence', fibonacciSequenceRouter);
router.post('/generate', ProductsRouter);
router.post('/productsInRange', productsInRangeRouter);
router.post('/productById', productByIdRouter);
router.get('/apiCalls', apiCallsRouter);

app.use('/api', router);

app.use('*', errorRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
