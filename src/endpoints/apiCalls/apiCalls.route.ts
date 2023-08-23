import { Router } from 'express';
import { ApiCallsControllerInstance } from './apiCalls.controller';

const apiCallsRouter = Router();

apiCallsRouter.get('/apiCalls', ApiCallsControllerInstance.makeApiCalls);

export { apiCallsRouter };