import { Router } from 'express';
import { ReadTxtFileControllerInstance } from './readTxtFile.controller';

const readTxtFileRouter = Router();

readTxtFileRouter.get('/readTxtFile/:container/:file', ReadTxtFileControllerInstance.getFileContent);

export { readTxtFileRouter };