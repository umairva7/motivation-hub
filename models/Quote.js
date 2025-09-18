// models/Quote.js
import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    text: String,
    author: String,
    category: String,
  },
  { collection: "quotes" } // 👈 EXACT collection name from MongoDB
);

const Quote = mongoose.model("Quote", quoteSchema);
export default Quote;
