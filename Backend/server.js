import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
import { connectDB } from "./config/db.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db Connection
connectDB();

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(port, () => {
  console.log(`Server Started on :http://localhost:${port}`);
});
