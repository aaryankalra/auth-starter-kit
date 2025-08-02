import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user || !user.isVerified) {
      return res.status(401).json({
        success: false,
        message: "Not authorized or email not verified",
      });
    }

    req.userId = user._id;
    next();
  } catch (error) {
    console.error("Auth error: ", error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
