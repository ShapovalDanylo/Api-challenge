import { Request, Response } from 'express';

class ApiController {
    getHealthCheck(req: Request, res: Response) {
        return res.status(200).json('Status 200 OK');
    };
};

export const apiControllerInstance = new ApiController();