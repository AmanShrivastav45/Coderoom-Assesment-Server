import express from "express"; 
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectMongoDB } from "./database/connection.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 8080;
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/coderoom-assessment/auth", authRoutes);
app.listen(PORT, async () => {
  await connectMongoDB();
  console.table({
    "Server Status": "Active",
    "Server Port": PORT,
    "MongoDB": "Connected",
  });
});