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
  readTxtFileRouter,
  largeFileRouter,
} from './endpoints';

const app = express();
const port = process.env.APP_PORT || 3000;

const router = Router();

router.use(json());

router.get('/', apiRouter);
router.get('/challenge', challengeRouter);
router.get('/factorial', factorialRouter);
router.get('/productById/:id', productByIdRouter);
router.get('/apiCalls', apiCallsRouter);
router.get('/fibonacciSequence', fibonacciSequenceRouter);
router.get('/generate', ProductsRouter);
router.get('/productsInRange', productsInRangeRouter);
router.get('/readTxtFile/:container/:file', readTxtFileRouter);
router.get('/largeFile/:container/:file', largeFileRouter);
router.post('/sortArray', sortArrayRouter);
router.post('/reverseWords', reverseWordsRouter);

app.use('/api', router);

app.use('*', errorRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
