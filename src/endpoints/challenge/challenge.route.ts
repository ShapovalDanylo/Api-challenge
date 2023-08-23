import { Router } from 'express';
import { ChallengeControllerInstance } from './challenge.controller';

const challengeRouter = Router();

challengeRouter.get('/challenge', ChallengeControllerInstance.getChallengeAcceptMessage);

export { challengeRouter };