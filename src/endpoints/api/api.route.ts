import { Router } from 'express';
import { ApiControllerInstance } from './api.controller';

const apiRouter = Router();

apiRouter.get('/', ApiControllerInstance.getHealthCheck);

export { apiRouter };