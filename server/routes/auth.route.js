import express from "express";
import {
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verify,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify", verify);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot", forgotPassword);
router.post("/reset/:token", resetPassword);

export default router;
