import express from "express"
import { connectToMongoDB } from "./dbconfig.js";
import { config} from "dotenv";
import { errorMiddleware } from "./errorMiddleware.js";
import { router } from "./route.js";

config();
const app=express();



app.use("/user",router)

// app.get("/",(req,res)=>res.json("I am listening"))

const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`server connected.. ${port}`);
    connectToMongoDB();
})

app.use(errorMiddleware);
