import mongoose from "mongoose";
import {config} from "dotenv";

config();
const url=process.env.URL

export const connectToMongoDB=()=>{
    mongoose.connect(url)
    .then(console.log("MongoDB connected...."))
    .catch((e)=>console.log(e))
}