import { Router } from 'express';
import { sortControllerInstance } from '../../controllers';

const sortRouter = Router();

sortRouter.post('/sort', sortControllerInstance.getSortedArray);

export { sortRouter };