import { Router } from 'express';
import { ChallengeControllerInstance } from '../../controllers';

const challengeRouter = Router();

challengeRouter.get('/challenge', ChallengeControllerInstance.getChallengeAcceptMessage);

export { challengeRouter };