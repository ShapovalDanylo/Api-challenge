import { Router } from 'express';
import { FactorialControllerInstance } from './factorial.controller';

const factorialRouter = Router();

factorialRouter.get('/factorial', FactorialControllerInstance.getFactorial);

export { factorialRouter };