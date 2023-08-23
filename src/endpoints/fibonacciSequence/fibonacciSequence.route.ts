import { Router } from 'express';
import { FibonacciSequenceControllerInstance } from './fibonacciSequence.controller';

const fibonacciSequenceRouter = Router();

fibonacciSequenceRouter.get('/fibonacciSequence', FibonacciSequenceControllerInstance.getFibonacciSequence);

export { fibonacciSequenceRouter };