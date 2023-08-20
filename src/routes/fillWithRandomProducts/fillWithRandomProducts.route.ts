import { Router } from 'express';
import { ProductsControllerInstance } from '../../controllers';

const ProductsRouter = Router();

ProductsRouter.post('/generate', ProductsControllerInstance.generateRandomProducts);

export { ProductsRouter };
