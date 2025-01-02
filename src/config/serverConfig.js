import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3001; 

export const MONGODB_URL = process.env.MONGODB_URL;

export const AWS_REGION = process.env.AWS_REGION;

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;