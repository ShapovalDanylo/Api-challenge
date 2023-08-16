import { Router } from 'express';
import { NumbersControllerInstance } from '../../controllers';

const numbersRouter = Router();

numbersRouter.post('/generate', NumbersControllerInstance.generateRandomNumbers);

export { numbersRouter };
