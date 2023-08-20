import { Router } from 'express';
import { ApiCallsControllerInstance } from '../../controllers';

const apiCallsRouter = Router();

apiCallsRouter.get('/apiCalls', ApiCallsControllerInstance.makeApiCalls);

export { apiCallsRouter };