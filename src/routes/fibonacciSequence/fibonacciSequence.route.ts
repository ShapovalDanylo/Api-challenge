import { Router } from 'express';
import { FibonacciSequenceControllerInstance } from '../../controllers';

const fibonacciSequenceRouter = Router();

fibonacciSequenceRouter.post('/fibonacciSequence', FibonacciSequenceControllerInstance.getFibonacciSequence);

export { fibonacciSequenceRouter };