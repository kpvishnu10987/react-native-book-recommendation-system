import mongoose from "mongoose";

export const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting database",error);
        process.exit(0);
    }
};