import { Request, Response } from 'express';

class ReverseWordsController {
    getStringWithReversedWords(req: Request, res: Response) {

        const { sentence } = req.body;

        if(!sentence || typeof sentence !== 'string') {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const outputString = sentence.split(' ').map(word => {
            return word.split('').reverse().join('');
        }).join(' ');;

        return res.status(200).json({ outputString });
    }
}

export const ReverseWordsControllerInstance = new ReverseWordsController();