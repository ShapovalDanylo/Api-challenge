import { Request, Response } from 'express';

class FibonacciSequenceController {
    getFibonacciSequence(req: Request, res: Response) {
        
        const { amount } = req.body;

        if(amount < 1 || amount > 100) {
            return res.status(400).json({ error: 'The number must not be less than 1 and greater than 100' });
        }

        if(!amount || typeof amount !== 'number') {
            return res.status(400).json({ error: 'Invalid data format' });
        }
        
        function generateFibonacci(n: number): number[] {
          if (n === 1) {
            return [0];
          }
        
          const fibonacciArray = [0, 1];
        
          for (let i = 2; i < n; i++) {
            const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
            fibonacciArray.push(nextFibonacci);
          }
        
          return fibonacciArray;
        }

        const fibonacciNumbers = generateFibonacci(amount);

        return res.status(200).json({ fibonacciNumbers });
    }
}

export const FibonacciSequenceControllerInstance = new FibonacciSequenceController();