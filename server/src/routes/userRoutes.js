import express from "express";
import { GetProfile } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from 'multer';
import { UpdateUser, deleteUser} from "../controllers/authController.js";

const upload = multer();

const router = express.Router();

router.get("/profile", Protect, GetProfile);


router.put("/update", Protect, upload.single("picture"), UpdateUser);

router.put("/deactivate", Protect, deleteUser);


export default router;