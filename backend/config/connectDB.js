import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(`${connInstance.connection.host}`);
    } catch (error) {
        console.error('connectDB error:', error);
        process.exit(1);
    }

}