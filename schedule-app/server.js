const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { startDatabase, isConnected } = require('../backend/db');

// Import Routers
const FeedbackRouter = require("../backend/Routes/Feedback.route");
const FavouriteRouter = require("../backend/Routes/Favourite.route");
const CartRouter = require("../backend/Routes/Cart.route");

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Server is up and running!',
    database: isConnected() ? 'connected' : 'disconnected'
  });
});

app.use('/api/feedback', FeedbackRouter);
app.use('/api/favourite', FavouriteRouter);
app.use('/api/cart', CartRouter);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Schedule endpoint to handle POST requests
app.post('/api/schedule', (req, res) => {
  const { fullName, email, phoneNumber, dateTime } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: 'New Viewing Scheduled',
    text: `New viewing scheduled:\n\nFull Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nPreferred Date & Time: ${dateTime}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server and connect to the database
app.listen(port, async () => {
  try {
    await startDatabase();
    console.log(`🚀 Server running on port ${port}`);
  } catch (error) {
    console.error('Database connection error:', error);
  }
});