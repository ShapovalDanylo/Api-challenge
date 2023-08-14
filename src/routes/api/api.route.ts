import { Router } from 'express';
import { apiControllerInstance } from '../../controllers';

const apiRouter = Router();

apiRouter.get('/', apiControllerInstance.getHealthCheck);

export { apiRouter };