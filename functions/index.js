const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')('sk_test_51PjgFXCJYEcgaq1zxyUokVbXhs0NiY4EmPsF9vEdLgOTgwVG1qpEFKTT3vpRiYCHHDjo8jfAk4dCxgqpTTTzAmr80069ApBHSc');
// const stripe = require('stripe')(functions.config().stripe.secret_key);

require('dotenv').config();

admin.initializeApp();

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  const amount = data.amount;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
});
