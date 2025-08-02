import express from "express";
import { GetAllContacts , UpdateContacts } from "../controllers/adminController.js";
import { isAdmin, Protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/contacts", Protect, isAdmin, GetAllContacts);
router.put("/contacts/:Qid", Protect, isAdmin, UpdateContacts);


export default router;