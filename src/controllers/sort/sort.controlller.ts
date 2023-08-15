import { Request, Response } from 'express';

class SortController {
    getSortedArray(req: Request, res: Response) {
    
        const { integers } = req.body;

        if(!integers || !Array.isArray(integers)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        const allAreNumbers = integers.every( num => typeof num === 'number' );
        if(!allAreNumbers) {
            return res.status(400).json({ error: 'Array should contain only numbers' });
        }

        const sortedArray = integers.sort( (a,b) => a - b );
        return res.status(200).json({ sortedArray });
    };
};

export const sortControllerInstance = new SortController();