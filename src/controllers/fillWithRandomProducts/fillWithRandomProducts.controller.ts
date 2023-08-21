import { Request, Response } from 'express';
import { DatabaseInstance } from '../../modules';
import { faker } from '@faker-js/faker';

class ProductsController {
    async generateRandomProducts(req: Request, res: Response) {
        try {
            const { n } = req.body;

            if(n < 0 || n > 10000) {
                return res.status(400).json({ error: 'Value can only be a number between 1 and 10000 inclusive' });
            }

            if(!n || typeof n !== 'number') {
                return res.status(400).json({ error: 'The value can only be a number' });
            }

            const randomProducts = [];
            for (let i = 0; i < n; i++) {
                randomProducts.push({
                    productName: faker.commerce.product(),
                    productPrice: faker.number.float({ min: 1, max: 10000 }).toFixed(2),
                    productDescription: faker.commerce.productDescription()
                });
            }

            const query = 'INSERT INTO "Products" (productName, productPrice, productDescription) VALUES ($1, $2, $3)';
            await DatabaseInstance.query('BEGIN');

            for (const product of randomProducts) {
                await DatabaseInstance.query(query, [product.productName, product.productPrice, product.productDescription]);
            }
            
            await DatabaseInstance.query('COMMIT');

            return res.json({ message: `${n} random products inserted successfully.` });
        } catch(error) {
            console.error('Error:', error);
            await DatabaseInstance.query('ROLLBACK');
            return res.status(500).json({ error: 'An error occurred' });
        }
    }
}

export const ProductsControllerInstance = new ProductsController();