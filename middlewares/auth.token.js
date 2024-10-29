import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (request, response, next) => {
  const token = request.cookies.token;  // Assuming token is in cookies
  if (!token) {
    return response.status(401).json({ success: false, message: "Unauthorized - no token provided" });
  }

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return response.status(401).json({ success: false, message: "Unauthorized - invalid token" });
    }

    // Set userId and role in the request object
    request.user = {
      userId: decoded.userId,
    };

    next();

  } catch (error) {
    console.log("Error in verifyToken: ", error);
    return response.status(500).json({ success: false, message: "Server error" });
  }
};
