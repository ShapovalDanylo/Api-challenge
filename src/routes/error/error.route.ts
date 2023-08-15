import { Router } from 'express';
import { ErrorControllerInstance } from '../../controllers';

const errorRouter = Router();

errorRouter.get('*', ErrorControllerInstance.getError);

export { errorRouter };