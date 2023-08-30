import { Request, Response } from 'express';
import NodeCache from 'node-cache';
import compression from 'compression';

const cache = new NodeCache();

class SortArrayController {
    constructor() {
        this.useCompressionMiddleware = this.useCompressionMiddleware.bind(this);
    }

    useCompressionMiddleware() {
        return compression();
    }

    getSortedArray(req: Request, res: Response) {
        const { integers } = req.body;

        if (!integers || !Array.isArray(integers)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const allAreNumbers = integers.every(num => typeof num === 'number');
        if (!allAreNumbers) {
            return res.status(400).json({ error: 'Array should contain only numbers' });
        }

        const cacheKey = `sortedArray_${integers.join('_')}`;
        const cachedResult = cache.get(cacheKey);

        if (cachedResult) {
            return res.status(200).json({ sortedArray: cachedResult });
        }

        const sortedArray = [...integers].sort((a, b) => a - b);

        cache.set(cacheKey, sortedArray, 5 * 60);

        return res.status(200).json({ sortedArray });
    }
}

export const SortArrayControllerInstance = new SortArrayController();
