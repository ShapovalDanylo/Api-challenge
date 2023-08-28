import { Request, Response } from 'express';

class FactorialController {
    getFactorial(req: Request, res: Response) {
        const n = Number(req.query.n);

        if (!n || typeof n !== 'number') {
            return res.status(400).json({ error: 'The value can only be a number' });
        }

        if (n < 1 || n > 20) {
            return res.status(400).json({ error: 'Value can only be a number between 1 and 20 inclusive' });
        }

        function factorialIterative(number: number): number {
            let result = 1;
            for (let i = 2; i <= number; i++) {
                result *= i;
            }
            return result;
        }

        const result = factorialIterative(n);

        return res.status(200).json({ result });
    }
}

export const FactorialControllerInstance = new FactorialController();
