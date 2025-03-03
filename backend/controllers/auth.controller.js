import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";

export const signup = async(req, res) => {
    try {
        const { username, fullname, email, password } = req.body;

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: "Invalid email",
            });
        }

        const exitingEmail = await User.findOne({email});        
        if (exitingEmail) {
            return res.status(400).json({
                error: "Email already exists",
            });
        }

        const exitingUsername = await User.findOne({username});
        if(exitingUsername) {
            return res.status(400).json({
                error: "Username already taken",
            });
        }

        if(password.length < 6) {
            return res.status(400).json({
                error: "Password must be at least 6 characters long",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            fullname,
            email,
            password: hashedPassword,
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                email: newUser.email,
                followers: newUser.followers,
                following: newUser.following,
                profileImg: newUser.profileImg,
                coverImg: newUser.coverImg,
            })
        }
        else{
            res.status(400).json({error: "Invalid user data"});
        }
        
    } catch (error) {
        console.log("Error on signup", error.message);
        res.status(500).json({error: "Server error on signup"});
    }
}

export const login = async(req, res) => {
    try {
            const { username, password } = req.body;
            const user = await User.findOne({username});
            if(!user) {
                return res.status(400).json({error: "Invalid credentials username"});
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                return res.status(400).json({error: "Invalid credentials password"});
            }

            generateTokenAndSetCookie(user._id, res);
            
            res.status(200).json({
                _id: user._id,
                fullname: user.fullname,
                username: user.username,
                email: user.email,
                followers: user.followers,
                following: user.following,
                profileImg: user.profileImg,
                coverImg: user.coverImg,
            });
    }
    catch (error) {
        console.log("Error on login", error.message);
        res.status(500).json({error: "Server error on login"});
        
    }
}

export const logout = async(req, res) => {
    try {
        res.cookie("jwt","", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("Error on logout", error.message);
        res.status(500).json({error: "Server error on logout"});        
    }
}


