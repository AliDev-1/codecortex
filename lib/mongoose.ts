import mongoose from 'mongoose';

let isConnected :boolean = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);
    
    if (!process.env.MONGODB_URI) {
        return console.log ('MONGODB_URI is not set');
    }

    if (isConnected) {
        console.log('MongoDB Connection already established');
        return;
    }

    try { 
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'codecortex',
        })
        isConnected = true;
        console.log('MongoDB Connection established');
    }
    catch (error) {
        console.log('Error connecting to MongoDB');
    }
}