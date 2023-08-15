import { Router } from 'express';
import { factorialControllerInstance } from '../../controllers';

const factorialRouter = Router();

factorialRouter.post('/factorial', factorialControllerInstance.getFactorial);

export { factorialRouter };