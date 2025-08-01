import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./db/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/ping", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Connected.",
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server running successfully on PORT ${PORT} or http://localhost:${PORT}`
    );
  });
});
