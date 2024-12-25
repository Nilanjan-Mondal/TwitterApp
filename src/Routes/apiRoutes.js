import express from 'express';
import v1Router from './V1/v1Routes.js'
import v2Router from './V2/v2Routes.js'

const router = express.Router();


router.use('/v1', v1Router); // if the remaining req url starts with /v1, use the v1Router
router.use('/v2', v2Router); // if the remaining req url starts with /v2, use the v2Router

export default router;