import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateJWTandSetCookie = (response, userId) =>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })
    
    response.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    });

    return token;
}