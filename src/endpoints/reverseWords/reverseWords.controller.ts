import { Request, Response } from 'express';

class ReverseWordsController {
    getStringWithReversedWords(req: Request, res: Response) {
        const { sentence } = req.body;

        if (!sentence || typeof sentence !== 'string') {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const reversedWords = sentence
            .split(' ')
            .map(word => word.split('').reverse().join(''))
            .join(' ');

        return res.status(200).json({ reversedWords });
    }
}

export const ReverseWordsControllerInstance = new ReverseWordsController();
