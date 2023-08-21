import { Request, Response } from 'express';
import { DatabaseInstance } from '../../modules';

class ProductsInRangeController {
  async getProductsInRange(req: Request, res: Response) {
    try {
      const { from, to } = req.query;

      if (!from || typeof +from !== 'number' || !to || typeof +to !== 'number') {
        return res.status(400).json({ error: 'The values can only be a numbers' });
      }

      if(+from < 1 || +to < 1) {
        return res.status(400).json({ error: 'Invalid input. Values FROM and TO must be a positive integers.' });
      }

      if(+from > +to) {
        return res.status(400).json({ error: 'FROM value can not be greater than TO value.' })
      }

      const records = await DatabaseInstance.query('SELECT * FROM "Products" LIMIT $1 OFFSET $2', [+to - +from + 1, +from - 1]);
      const result = records.rows;

      return res.status(200).json({ result });

    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'An error occurred' });
    }
  }
}

export const ProductsInRangeControllerInstance = new ProductsInRangeController();
