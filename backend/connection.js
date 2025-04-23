import mongoose from "mongoose";
export default async function connection() {
    try{
        const db=await mongoose.connect("mongodb://127.0.0.1:27017/Sticky")
        console.log("connected db");
        return db
    } catch (error){
        console.log("db connection error",error)
    }
    
}