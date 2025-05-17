import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import financeRoutes from "./src/routes/financialRoutes.js"

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from this origin (your frontend)
  credentials:true,
}));

const mongoUrl ="mongodb+srv://new:019oq7L6cm85ZJsj@cluster0.x0drt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 

mongoose
  .connect(mongoUrl)
  .then(() => console.log(" Connected to MongoDB"))
  .catch(err => console.error(" MongoDB connection error:", err));

app.use("/auth", authRoutes);
app.use("/",financeRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
