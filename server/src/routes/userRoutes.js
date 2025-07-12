import express from "express";
import { GetProfile, UpdateProfile } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from 'multer';

const upload = multer();

const router = express.Router();

router.get("/profile", Protect, GetProfile);

router.put("/update", Protect,upload.single("picture"), UpdateProfile);


export default router;