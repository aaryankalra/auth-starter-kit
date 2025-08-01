import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
      next();
    } catch (error) {
      console.error("Auth error: ", error);
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }
};
