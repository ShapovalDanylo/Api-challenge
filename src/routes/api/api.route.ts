import { Router } from 'express';
import { ApiControllerInstance } from '../../controllers';

const apiRouter = Router();

apiRouter.get('/', ApiControllerInstance.getHealthCheck);

export { apiRouter };