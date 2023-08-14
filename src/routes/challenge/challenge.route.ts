import { Router } from 'express';
import { challengeControllerInstance } from '../../controllers';

const challengeRouter = Router();

challengeRouter.get('/challenge', challengeControllerInstance.getChallengeAcceptMessage);

export { challengeRouter };