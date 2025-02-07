import express from 'express';
import { createTweet, getTweets, getTweetById , deleteTweet, updateTweet} from '../../Controllers/tweetController.js'

import { createTweetManualValidator } from '../../Validators/tweetManualValidators.js';
import { validate } from '../../Validators/zodValidator.js';
import { tweetZodSchema } from '../../Validators/tweetZodSchema.js';
import { s3Uploader } from '../../config/multerConfig.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.get('/', getTweets);

router.get('/:id', getTweetById);

// router.post('/', createTweetManualValidator, createTweet); // createTweetManualValidator is a middleware that is used as validator

router.post('/', s3Uploader.single('tweetImage'), validate(tweetZodSchema), createTweet); // zod validator is used as a middleware for validation

router.delete('/:id', deleteTweet);

router.put('/:id', updateTweet);

export default router;