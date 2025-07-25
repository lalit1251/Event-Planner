import dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";
import AuthRouter from "./src/routes/authRoutes.js"
import express from 'express';
import cors from "cors";
import connectDB from "./src/config/db.js";
import UserRouter from "./src/routes/userRoutes.js"
import cookieParser from "cookie-parser";
import ContactUsRouter from "./src/routes/contactUsRoutes.js";



const app = express();

app.use(cors({origin : "http://localhost:5173", credentials: true}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth",AuthRouter);
app.use("/user",UserRouter);
app.use("/contact",ContactUsRouter);
            
app.get("/",(request,response)=>{
    response.json({ message:"Server : Connected"}) 
}) ;

app.use((err,req,res,next)=>{
    const errorMessage = err.message  || "Internal Server Error"
    const errorCode = err.statusCode || 500
    res.status(errorCode).json({message:errorMessage})
})
        
const port = process.env.PORT  || 5000;


app.listen(port, async()=>{
    console.log("server started at", port);
    connectDB();

   

    
});
