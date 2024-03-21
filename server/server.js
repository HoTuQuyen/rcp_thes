import express from "express";
import cors from "cors";
// import { dbPool } from "./db.js";
import { config as dotenvConfig } from "dotenv";
import { getProduct } from "./routes/posts.js";
import axios from "axios";
// Configure dotenv
dotenvConfig();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

// Get all products in recipes
app.use("/recipes", getProduct);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
