import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router= express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
router.post("/enquire", async (req, res) => {
  const { itemName } = req.body;

  const mailOptions = {
    from:  process.env.EMAIL_USER,
    to: "static@email.com",
    subject: `Enquiry for ${itemName}`,
    text: `Someone has enquired about "${itemName}".`,
  };
try{
  await transporter.sendMail(mailOptions);
  res.status(200).json({ message: "Enquiry email sent" });
  }catch(err){
     console.error("Email failed:", err);
    res.status(500).json({ message: "Failed to send enquiry email" });
  }
});

export default router;