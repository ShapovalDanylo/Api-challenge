import { Router } from 'express';
import { ReverseWordsControllerInstance } from '../../controllers';

const reverseWordsRouter = Router();

reverseWordsRouter.post('/reverseWords', ReverseWordsControllerInstance.getStringWithReversedWords);

export { reverseWordsRouter };