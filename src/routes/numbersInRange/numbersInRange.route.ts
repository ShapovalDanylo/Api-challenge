import { Router } from 'express';
import { NumbersInRangeControllerInstance } from '../../controllers';

const numbersInRangeRouter = Router();

numbersInRangeRouter.post('/numbersInRange', NumbersInRangeControllerInstance.getNumbersInRange);

export { numbersInRangeRouter };