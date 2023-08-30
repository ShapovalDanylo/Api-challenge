import { Request, Response } from 'express';
import NodeCache from 'node-cache';
import compression from 'compression';
import { DatabaseInstance } from '../../modules';

const cache = new NodeCache();

class ProductsInRangeController {
    constructor() {
        this.useCompressionMiddleware = this.useCompressionMiddleware.bind(this);
    }

    useCompressionMiddleware() {
        return compression();
    }

    async getProductsInRange(req: Request, res: Response) {
        try {
            const rangeStart = Number(req.query.rangeStart);
            const rangeEnd = Number(req.query.rangeEnd);

            if (!rangeStart || typeof rangeStart !== 'number' || !rangeEnd || typeof rangeEnd !== 'number') {
                return res.status(400).json({ error: 'The values can only be numbers' });
            }

            if (rangeStart < 1 || rangeEnd < 1) {
                return res.status(400).json({ error: 'Invalid input. Values FROM and TO must be positive integers.' });
            }

            if (rangeStart > rangeEnd) {
                return res.status(400).json({ error: 'FROM value cannot be greater than TO value.' })
            }

            const cacheKey = `productsInRange_${rangeStart}_${rangeEnd}`;
            const cachedData = cache.get(cacheKey);

            if (cachedData) {
                return res.status(200).json({ result: cachedData });
            }

            const records = await DatabaseInstance.query('SELECT * FROM "Products" LIMIT $1 OFFSET $2', [rangeEnd - rangeStart + 1, rangeStart - 1]);
            const result = records.rows;

            cache.set(cacheKey, result, 5 * 60);

            return res.status(200).json({ result });

        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ error: 'An error occurred' });
        }
    }
}

export const ProductsInRangeControllerInstance = new ProductsInRangeController();
