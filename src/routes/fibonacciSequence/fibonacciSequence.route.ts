import { Router } from 'express';
import { FibonacciSequenceControllerInstance } from '../../controllers';

const fibonacciSequenceRouter = Router();

fibonacciSequenceRouter.get('/fibonacciSequence', FibonacciSequenceControllerInstance.getFibonacciSequence);

export { fibonacciSequenceRouter };