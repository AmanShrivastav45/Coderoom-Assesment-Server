import nodemailer from "nodemailer";
import { WELCOME_TEMPLATE } from "../templates/templates.js";

export const sendWelcomeEmail = async (firstName, email) => {
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
      subject: "Welcome to Coderoom Playground",
      html: WELCOME_TEMPLATE.replace("{firstName}", firstName),
    };

    await transporter.sendMail(mailOptions);
    return {
      status: "SUCCESS",
      message: "Verification Successfull",
    };

  } catch (error) {
    console.error("Error in verification", error);
    return {
      status: "FAILED",
      message: error.message,
    };
  }
};
