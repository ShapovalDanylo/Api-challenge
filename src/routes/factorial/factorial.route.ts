import { Router } from 'express';
import { FactorialControllerInstance } from '../../controllers';

const factorialRouter = Router();

factorialRouter.get('/factorial', FactorialControllerInstance.getFactorial);

export { factorialRouter };