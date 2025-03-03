import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                error: "You need to be logged in to visit this route",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({
                error: "Invalid token. Please login again",
            });
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({
                error: "User not found",
            });
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("Error on protectRoute", error.message);
        return res.status(500).json({
            error: "Internal server error on protectRoute",
        });
    }
}