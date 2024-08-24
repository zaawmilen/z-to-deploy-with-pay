import axios from 'axios';

// Replace with your local backend URL
const createPaymentIntentUrl = 'http://localhost:5000/create-payment-intent';
// const createPaymentIntentUrl ='https://render.com/docs/node-version';
const createPaymentIntent = async (items) => {
  try {
    // Send the array of items to your backend
    const response = await axios.post(createPaymentIntentUrl, { items });

    // Return the client secret received from the backend
    return response.data.clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error; // Rethrow to handle it in your component
  }
};

export default createPaymentIntent;
