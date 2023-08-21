import { Request, Response } from 'express';

class ApiCallsController {
    async makeApiCalls(req: Request, res: Response) {

        const results = await Promise.allSettled([
            fetch("https://jsonplaceholder.typicode.com/users/1").then((r) => r.json()),
            fetch("https://jsonplaceholder.typicode.com/users/2").then((r) => r.json()),
            fetch("https://jsonplaceholder.typicode.com/users/3").then((r) => r.json()),
            fetch("https://jsonplaceholder.typicode.com/users/4").then((r) => r.json()),
            fetch("https://jsonplaceholder.typicode.com/users/5").then((r) => r.json())
        ])
            .catch((err) => console.log(err))

        const values = results!.map((result: any) => result.value);
      
        return res.status(200).json({ values });
    }
}

export const ApiCallsControllerInstance = new ApiCallsController();