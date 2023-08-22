import { Request, Response } from 'express';

class FibonacciSequenceController {
    getFibonacciSequence(req: Request, res: Response) {
        
        const n = Number(req.query.n);

        if(!n || typeof n !== 'number') {
          return res.status(400).json({ error: 'Invalid data format' });
        }

        if(n < 1 || n > 100) {
            return res.status(400).json({ error: 'The number must not be less than 1 and greater than 100' });
        }
        
        function generateFibonacci(number: number): number[] {
          if (number === 1) {
            return [0];
          }
        
          const fibonacciArray = [0, 1];
        
          for (let i = 2; i < number; i++) {
            const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
            fibonacciArray.push(nextFibonacci);
          }
        
          return fibonacciArray;
        }

        const fibonacciNumbers = generateFibonacci(n);

        return res.status(200).json({ fibonacciNumbers });
    }
}

export const FibonacciSequenceControllerInstance = new FibonacciSequenceController();