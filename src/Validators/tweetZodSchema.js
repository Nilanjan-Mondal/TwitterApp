import { z } from 'zod'

export const tweetZodSchema = z.object({
    tweet: z.string().min(1).max(200)
});