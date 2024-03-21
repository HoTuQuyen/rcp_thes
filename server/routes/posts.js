import express from "express";
// import router from "router";
const router = express.Router();
import { dbPool } from "../db.js";

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM recipes";
    const [results] = await dbPool.query(query);
    res.json(results);
  } catch (error) {
    console.error("Error", error);
    res.status(500).send("Internal Server Error");
  }
});

export { router as getProduct };
