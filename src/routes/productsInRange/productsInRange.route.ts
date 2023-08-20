import { Router } from 'express';
import { ProductsInRangeControllerInstance } from '../../controllers';

const productsInRangeRouter = Router();

productsInRangeRouter.post('/productsInRange', ProductsInRangeControllerInstance.getProductsInRange);

export { productsInRangeRouter };