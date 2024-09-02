import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
        console.log('Connected to Db')
    } catch (error) {
        console.log(error)
    }
}