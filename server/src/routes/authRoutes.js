import express from "express";
import { RegisterUser,LoginUser,LogoutUser,UpdateUser } from "../controllers/authController.js";
const router = express.Router();

router.post("/register",RegisterUser);
router.post("/login",LoginUser);
router.post("/logout",LogoutUser);
router.post("/update",UpdateUser);

export default router;