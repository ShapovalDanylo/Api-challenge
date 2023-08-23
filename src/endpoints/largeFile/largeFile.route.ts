import { Router } from 'express';
import { LargeFileControllerInstance } from './largeFile.controller';

const largeFileRouter = Router();

largeFileRouter.get('/largeFile/:container/:file', LargeFileControllerInstance.getLargeFile);

export { largeFileRouter };