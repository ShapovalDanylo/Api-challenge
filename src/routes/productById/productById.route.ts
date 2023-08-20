import { Router } from 'express';
import { ProductByIdControllerInstance } from '../../controllers';

const productByIdRouter = Router();

productByIdRouter.post('/productById', ProductByIdControllerInstance.getProductById);

export { productByIdRouter };