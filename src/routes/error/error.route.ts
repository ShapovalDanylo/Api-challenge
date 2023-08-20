import { Router } from 'express';
import { ErrorControllerInstance } from '../../controllers';

const errorRouter = Router();

errorRouter.all('*', ErrorControllerInstance.getError);

export { errorRouter };