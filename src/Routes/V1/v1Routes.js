import express from 'express';
import tweetRouterv1 from './v1tweet.js';
import { getTweets } from '../../Controllers/tweetController.js';

const router = express.Router();

router.use('/tweet', tweetRouterv1);
router.use('/getTweet', getTweets);


export default router;