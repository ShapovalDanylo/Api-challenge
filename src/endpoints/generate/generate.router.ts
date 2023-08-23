import { Router } from 'express';
import { ProductsControllerInstance } from './generate.controller';

const ProductsRouter = Router();

ProductsRouter.get('/generate', ProductsControllerInstance.generateRandomProducts);

export { ProductsRouter };
