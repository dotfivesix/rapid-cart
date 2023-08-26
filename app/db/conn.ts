import { connect, disconnect } from 'mongoose';
import { config } from 'dotenv';

config();

const KEY = process.env.MONGODB_URI!;

let isDbConnected = false;

export const establishDbConnection = async () => {
    if (!isDbConnected) {
        try {
            await connect(KEY);
            isDbConnected = true;
            console.log('Connected to the MongoDB database');
        } catch (error) {
            console.error('MongoDB connection error:', error);
        }
    }
};

export const closeDbConnection = async () => {
    if (isDbConnected) {
        await disconnect();
        isDbConnected = false;
        console.log('Disconnected from the MongoDB database');
    }
};