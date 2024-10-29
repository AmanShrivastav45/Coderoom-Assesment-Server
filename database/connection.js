import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectMongoDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}