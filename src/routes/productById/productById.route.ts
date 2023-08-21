import { Router } from 'express';
import { ProductByIdControllerInstance } from '../../controllers';

const productByIdRouter = Router();

productByIdRouter.get('/productById/:id', ProductByIdControllerInstance.getProductById);

export { productByIdRouter };