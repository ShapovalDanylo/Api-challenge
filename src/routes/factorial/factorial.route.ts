import { Router } from 'express';
import { FactorialControllerInstance } from '../../controllers';

const factorialRouter = Router();

factorialRouter.post('/factorial', FactorialControllerInstance.getFactorial);

export { factorialRouter };