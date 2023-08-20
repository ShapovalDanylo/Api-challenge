import { Request, Response } from 'express';

class ApiCallsController {
    async makeApiCalls(req: Request, res: Response) {

        const results = await Promise.allSettled([
            fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => response.json()),
            fetch("https://jsonplaceholder.typicode.com/users/2").then((response) => response.json()),
            fetch("https://jsonplaceholder.typicode.com/users/3").then((response) => response.json()),
            fetch("https://jsonplaceholder.typicode.com/users/4").then((response) => response.json()),
            fetch("https://jsonplaceholder.typicode.com/users/5").then((response) => response.json())
        ])
            .catch((err) => console.log(err))

        const response = results!.map((result: any) => result.value);
      
        return res.status(200).json({ response });
    }
}

export const ApiCallsControllerInstance = new ApiCallsController();