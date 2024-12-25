import express from 'express';
import { geTweets, geTweetsById, createTweet } from '../../Controllers/tweetController.js';

const router = express.Router();

router.get('/', geTweets);

router.get('/:id', geTweetsById);

router.post('/', createTweet);





export default router;