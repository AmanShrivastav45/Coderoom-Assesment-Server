// auth.route.js
import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.token.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/refresh-token", async (request, response) => {
  const { refreshToken } = request.cookies;
  if (!refreshToken) return response.sendStatus(401);
  try {
    const { userId } = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const { accessToken, refreshToken: newRefreshToken } =
      generateTokens(userId);

    response.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: "Strict",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    response.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    response
      .status(200)
      .json({ success: true, message: "Access token refreshed" });
  } catch (error) {
    console.log("Error in refresh-token ", error);
    response.status(400).json({ success: false, message: error.message });
  }
});

export default router;
