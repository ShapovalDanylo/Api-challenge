import { Request, Response } from 'express';
import { DatabaseInstance } from '../../modules';

class NumbersController {
    async generateRandomNumbers(req: Request, res: Response) {
        try {
            const { n } = req.body;

            if(n < 0 || n > 10000) {
                return res.status(400).json({ error: 'Value can only be a number between 1 and 10000 inclusive' });
            }

            if(!n || typeof n !== 'number') {
                return res.status(400).json({ error: 'The value can only be a number' });
            }

            const randomNumbers = [];
            for (let i = 0; i < n; i++) {
                randomNumbers.push([Math.floor(Math.random() * 1000)]);
            }

            const query = 'INSERT INTO Numbers (number) VALUES ($1)';
            await DatabaseInstance.query('BEGIN');

            for (const number of randomNumbers) {
                await DatabaseInstance.query(query, number);
            }
            
            await DatabaseInstance.query('COMMIT');

            return res.json({ message: `${n} random numbers inserted successfully.` });
        } catch(error) {
            console.error('Error:', error);
            await DatabaseInstance.query('ROLLBACK');
            return res.status(500).json({ error: 'An error occurred' });
        }
    }
}

export const NumbersControllerInstance = new NumbersController();