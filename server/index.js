import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import connectDB from "./src/config/db.js";

const app = express();
            
app.get("/",(request,response)=>{
    response.json({ message:"main server hoon"}) 
}) 
        
const port = process.env.PORT  || 5000;


app.listen(port,()=>{
    console.log("server started at", port);
    connectDB();
});
