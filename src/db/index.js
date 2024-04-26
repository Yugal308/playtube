import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // console.log(process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connection established!! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error!!!", error);
        throw error;
    }
}   

export default connectDB;