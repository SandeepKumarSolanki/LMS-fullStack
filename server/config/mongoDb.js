import mongoose from "mongoose";

const connectDb = () => {
 
    mongoose.connect(`${process.env.MONGODB_URI}/LMS`)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
  .catch ((error) => {
    console.error('MongoDB connection failed:', error.message);
  })
};

export default connectDb;
