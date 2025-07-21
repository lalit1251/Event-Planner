import express from "express";
import { SubmitContactForm } from "../controllers/contactUsController.js";


const router = express.Router();

router.post("/submit", SubmitContactForm);


export default router;