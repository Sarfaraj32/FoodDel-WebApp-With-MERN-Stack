import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();
// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db Connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(port, () => {
  console.log(`Server Started on :http://localhost:${port}`);
});
