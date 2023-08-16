import { Router } from 'express';
import { NumberByIdControllerInstance } from '../../controllers';

const numberByIdRouter = Router();

numberByIdRouter.post('/numberById', NumberByIdControllerInstance.getNumberById);

export { numberByIdRouter };