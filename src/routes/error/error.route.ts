import { Router } from 'express';
import { errorControllerInstance } from '../../controllers';

const errorRouter = Router();

errorRouter.get('*', errorControllerInstance.getError);

export { errorRouter };