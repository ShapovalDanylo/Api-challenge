import { Request, Response } from "express";

class ChallengeController {
    getChallengeAcceptMessage(req: Request, res: Response) {
        return res.json({
            message: 'The challenge accepted!!!'
        });
    };
};

export const challengeControllerInstance = new ChallengeController();