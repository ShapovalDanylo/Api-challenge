import { Router } from 'express';
import { ReverseWordsControllerInstance } from './reverseWords.controller';

const reverseWordsRouter = Router();

reverseWordsRouter.post('/reverseWords', ReverseWordsControllerInstance.getStringWithReversedWords);

export { reverseWordsRouter };