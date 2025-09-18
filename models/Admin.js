//Admin Model
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    }
    , { collection: "admins" } // 👈 EXACT collection name from MongoDB

);
const Admin = mongoose.model("Admin", adminSchema);
export default Admin;