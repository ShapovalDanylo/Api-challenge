import { Request, Response } from 'express';

class FactorialController {
    getFactorial(req: Request, res: Response) {

        const n = Number(req.query.n);

        if(!n || typeof n !== 'number') {
            return res.status(400).json({ error: 'The value can only be a number' });
        }

        if(n < 1 || n > 20) {
            return res.status(400).json({ error: 'Value can only be a number between 1 and 20 inclusive' });
        }

        function factorial(number: number): number {
            if(number === 0 || number === 1) {
                return 1;
            } else {
                return number * factorial(number - 1);
            }
        };

        const result = factorial(n);

        return res.status(200).json({ result });
    }
}

export const FactorialControllerInstance = new FactorialController();