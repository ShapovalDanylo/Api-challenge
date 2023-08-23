import { Router } from 'express';
import { ProductByIdControllerInstance } from './productById.controller';

const productByIdRouter = Router();

productByIdRouter.get('/productById/:id', ProductByIdControllerInstance.getProductById);

export { productByIdRouter };