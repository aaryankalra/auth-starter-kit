import express from "express";
import {
  forgotPassword,
  login,
  logout,
  resendOTP,
  resetPassword,
  signup,
  verifyOTP,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify", verifyOTP);
router.post("/resend-otp", resendOTP);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot", forgotPassword);
router.post("/reset/:token", resetPassword);

export default router;
