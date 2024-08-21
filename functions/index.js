// Import necessary packages
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

dotenv.config();

// Initialize Express app
const app = express();

// Use CORS middleware for handling Cross-Origin requests
app.use(cors({ origin: true }));

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.status(200).send('Hello from Firebase Functions!');
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { items } = req.body;
    console.log('Received items:', items); // Debugging line

    if (!Array.isArray(items)) {
      return res.status(400).send('Items should be an array.');
    }

    if (items.length === 0) {
      return res.status(400).send('Items array cannot be empty.');
    }

    for (const item of items) {
      if (typeof item.price !== 'number' || item.price <= 0) {
        return res.status(400).send('Each item must have a valid price.');
      }
      if (typeof item.quantity !== 'number' || item.quantity <= 0) {
        return res.status(400).send('Each item must have a valid quantity.');
      }
    }

    const amount = items.reduce((total, item) => total + item.price * item.quantity, 0) * 100;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });
    // Send the client secret of the payment intent to the frontend
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

// Example API route
app.post('/api/data', (req, res) => {
  const data = req.body;
  // Perform any operation with the data here
  res.status(200).send({ message: 'Data received!', data });
});
// Start the server on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});