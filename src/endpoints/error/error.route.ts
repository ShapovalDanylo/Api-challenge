import { Router } from 'express';
import { ErrorControllerInstance } from './error.controller';

const errorRouter = Router();

errorRouter.all('*', ErrorControllerInstance.getError);

export { errorRouter };