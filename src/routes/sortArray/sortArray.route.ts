import { Router } from 'express';
import { SortArrayControllerInstance } from '../../controllers';

const sortArrayRouter = Router();

sortArrayRouter.post('/sortArray', SortArrayControllerInstance.getSortedArray);

export { sortArrayRouter };