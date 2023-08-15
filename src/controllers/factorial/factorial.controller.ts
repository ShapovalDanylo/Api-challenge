import { Request, Response } from 'express';

class FactorialController {
    getFactorial(req: Request, res: Response) {

        const { integer } = req.body;

        if(integer < 1 || integer > 20) {
            return res.status(400).json({ error: 'Value can only be a number between 1 and 20 inclusive' });
        }

        if(!integer || typeof integer !== 'number') {
            return res.status(400).json({ error: 'The value can only be a number' });
        }

        function factorial(n: number): number {
            if(n === 0 || n === 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        };

        const result = factorial(integer);

        return res.status(200).json({ result });
    }
}

export const factorialControllerInstance = new FactorialController();