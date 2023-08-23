import { Router } from 'express';
import { ProductsInRangeControllerInstance } from './productsInRange.controller';

const productsInRangeRouter = Router();

productsInRangeRouter.get('/productsInRange', ProductsInRangeControllerInstance.getProductsInRange);

export { productsInRangeRouter };