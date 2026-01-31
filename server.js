import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Schema
const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    subscribedAt: { type: Date, default: Date.now }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Routes
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // 1. Save to MongoDB
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        // 2. Send Email
        const mailOptions = {
            from: `"Divyagrah" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Something Divine is Awakening - Welcome to Divyagrah!',
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .email-container {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              max-width: 600px;
              margin: 0 auto;
              background-color: #FFFAF4;
              border: 1px solid #E0D4CC;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            }
            .header {
              background-color: #8B0000;
              padding: 20px 10px;
              text-align: center;
              border-bottom: 4px solid #D35400;
            }
            .logo {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              border: 3px solid #FFFFFF;
              margin-bottom: 15px;
            }
            .brand-name {
              color: #FFFFFF;
              font-size: 24px;
              margin: 0;
              letter-spacing: 2px;
              font-weight: bold;
            }
            .brand-subtitle {
              color: #FFD700;
              font-size: 14px;
              margin: 5px 0 0 0;
              letter-spacing: 4px;
              text-transform: uppercase;
            }
            .content {
              padding: 40px;
              color: #2C3E50;
              line-height: 1.8;
              text-align: left;
            }
            .greeting {
              font-size: 24px;
              color: #8B0000;
              margin-bottom: 20px;
              font-weight: 400;
            }
            .message {
              font-size: 16px;
              margin-bottom: 30px;
            }
            .divider {
              height: 2px;
              background: linear-gradient(to right, transparent, #D35400, transparent);
              margin: 30px 0;
            }
            .footer {
              background-color: #F8F1E7;
              padding: 20px;
              text-align: center;
              font-size: 13px;
              color: #5D4037;
            }
            .tagline {
              font-style: italic;
              color: #D35400;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <img src="cid:logo" alt="Divyagrah Logo" class="logo">
              <h1 class="brand-name">दिव्यग्रह</h1>
              <p class="brand-subtitle">DIVYAGRAH</p>
            </div>
            <div class="content">
              <div class="greeting">Namaste!</div>
              <p class="message">
                We are humbled by your interest in <strong>Divyagrah</strong>. <br>
                Something divine is awakening. We are currently handcrafting a sacred digital space dedicated to the purest fragrances and essential ritual experiences.
              </p>
              <div class="divider"></div>
              <p class="tagline">Authentic & Pure • Handpicked Selection • Divine Grace</p>
              <p class="message" style="margin-top: 20px;">
                You will be the first to know the moment we open our doors.
              </p>
            </div>
            <div class="footer">
              <p>&copy; 2026 Divyagrah. Pure Fragrances, Divine Rituals.</p>
              <p style="margin-top: 5px; opacity: 0.7;">This is an automated notification. No reply is necessary.</p>
            </div>
          </div>
        </body>
        </html>
      `,
            attachments: [{
                filename: 'logo.jpg',
                path: path.join(__dirname, 'public/assets/logo.jpg'),
                cid: 'logo' // matches the src="cid:logo" in the HTML
            }]
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Subscribed successfully and email sent!' });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'You are already subscribed!' });
        }
        console.error('Subscription error:', error);
        res.status(500).json({ message: 'Error during subscription' });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
