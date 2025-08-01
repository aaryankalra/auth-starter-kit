import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  getProfile,
  updatePassword,
  updateProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.post("/update-password", protect, updatePassword);

export default router;
