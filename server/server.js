import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./db/db.js";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/api/ping", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Connected.",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server running successfully on PORT ${PORT} or http://localhost:${PORT}`
    );
  });
});
