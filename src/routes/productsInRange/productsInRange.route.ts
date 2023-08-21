import { Router } from 'express';
import { ProductsInRangeControllerInstance } from '../../controllers';

const productsInRangeRouter = Router();

productsInRangeRouter.get('/productsInRange', ProductsInRangeControllerInstance.getProductsInRange);

export { productsInRangeRouter };