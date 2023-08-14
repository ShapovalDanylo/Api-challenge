import { Request, Response } from "express";

class ErrorController {
    getError(req: Request, res: Response) {
        return res.status(404).json('Status 404 Not Found');
    };
};

export const errorControllerInstance = new ErrorController();