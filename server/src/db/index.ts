import mongoose from "mongoose"

export const connectDb = () => {
    const mongoUrl = process.env.MONGO_URL || '';
    
    mongoose.connect(mongoUrl).then(() => {
        console.log('Connected to MongoDB');
      }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
      });
}