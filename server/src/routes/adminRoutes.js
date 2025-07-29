import express from "express";



const router = express.Router();

router.get("/register",RegisterUser);


export default router;