import express from 'express';
import tweetRouterv1 from './v1tweet.js';

const router = express.Router();

router.use('/tweet', tweetRouterv1);

export default router;