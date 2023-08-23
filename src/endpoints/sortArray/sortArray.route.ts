import { Router } from 'express';
import { SortArrayControllerInstance } from './sortArray.controlller';

const sortArrayRouter = Router();

sortArrayRouter.post('/sortArray', SortArrayControllerInstance.getSortedArray);

export { sortArrayRouter };