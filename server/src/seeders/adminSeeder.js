import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js"
import User from "./models/userrModel.js"


const seederAdmin = async ()=>{
    await connectDB();



