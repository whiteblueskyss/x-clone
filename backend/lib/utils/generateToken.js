import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    // res.cookie("token", token, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000,
    // }); // 1 day 

    res.cookie("jwt", token, {
        httpOnly: true, // prevent client side JS from reading the cookie
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "Strict",// cookie should only be sent in same-site requests
        secure: process.env.NODE_ENV !== "development",
    })
}