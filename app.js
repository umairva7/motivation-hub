import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Quote from "./models/Quote.js";
import { admin } from "./middleware/admin.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Insert a quote
app.post("add-quote", admin, async (req, res) => {
  try {
    const { text, author, category } = req.body;
    const newQuote = new Quote({ text, author, category });
    await newQuote.save();
    res.status(201).json(newQuote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch all quotes
app.get("/quotes", async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
