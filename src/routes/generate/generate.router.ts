import { Router } from 'express';
import { ProductsControllerInstance } from '../../controllers';

const ProductsRouter = Router();

ProductsRouter.get('/generate', ProductsControllerInstance.generateRandomProducts);

export { ProductsRouter };
