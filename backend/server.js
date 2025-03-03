import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongodDB from "./db/connectMongodDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json()); // to parse incoming requests with JSON payloads
app.use(express.urlencoded({extended: true})); // to parse incoming requests with urlencoded payloads

app.use(cookieParser());

app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongodDB();
});

