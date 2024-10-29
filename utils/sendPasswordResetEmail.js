import nodemailer from "nodemailer";
import { RESET_PASSWORD_TEMPLATE } from "../templates/templates.js";

export const sendPasswordResetEmail = async (email, resetURL) => {

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: '"CodeRoom Playground" <coderoom.playground@gmail.com>',
      to: email,
      subject: "Reset your Coderoom password",
      html: RESET_PASSWORD_TEMPLATE.replace("{firstName}", firstName).replace("{resetURL}",resetURL),
    };

    await transporter.sendMail(mailOptions);
    return {
      status: "SUCCESS",
      message: "Password reset mail sent successfully",
    };
    
  } catch (error) {

    console.error("Error during password reset:", error);
    return {
      status: "FAILED",
      message: error.message,
    };

  }
};
