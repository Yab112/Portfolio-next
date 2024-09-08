// db.js
import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(url);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
};

export default connectDB;
