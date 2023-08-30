import { Request, Response } from 'express';
import NodeCache from 'node-cache';

const cache = new NodeCache();

class ReverseWordsController {
    getStringWithReversedWords(req: Request, res: Response) {
        const { sentence } = req.body;

        if (!sentence || typeof sentence !== 'string') {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const cacheKey = `reversedWords_${sentence}`;
        const cachedResult = cache.get(cacheKey);

        if (cachedResult) {
            return res.status(200).json({ reversedWords: cachedResult });
        }

        const reversedWords = sentence
            .split(' ')
            .map(word => word.split('').reverse().join(''))
            .join(' ');

        cache.set(cacheKey, reversedWords, 5 * 60);

        return res.status(200).json({ reversedWords });
    }
}

export const ReverseWordsControllerInstance = new ReverseWordsController();
