

import mongoose from 'mongoose';
import { MONGODB_URL } from './serverConfig.js';

export default async function connectDB() {
    try{
        await mongoose.connect(MONGODB_URL)
        console.log('Connected to MongoDB')
    } catch(error) {
        console.log('Failed to connect to MongoDB');
        console.log(error);
    }
}