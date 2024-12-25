import express from 'express';
import tweetRouterv2 from './v2tweet.js';

const router = express.Router();

router.use('/tweet', tweetRouterv2);

export default router;