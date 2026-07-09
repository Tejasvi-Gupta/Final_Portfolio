import { Router } from "express";
import nodemailer from "nodemailer";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email, and message are required." });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }
    if (message.length > 5000) {
      return res.status(400).json({ error: "Message is too long." });
    }

    // Store in DB (best-effort; don't fail the request if DB is down)
    try {
      await ContactMessage.create({ name, email, message });
    } catch (dbErr) {
      console.error("Failed to store contact message:", dbErr.message);
    }

    // Send email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.CONTACT_TO_EMAIL) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: message,
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err.message);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

export default router;
