import axios from 'axios';

// Replace with your Firebase Cloud Function URL
const createPaymentIntentUrl = 'https://<YOUR_REGION>-<YOUR_PROJECT_ID>.cloudfunctions.net/createPaymentIntent';

const createPaymentIntent = async (amount) => {
  try {
    const response = await axios.post(createPaymentIntentUrl, { amount });
    return response.data.clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error; // Rethrow to handle it in your component
  }
};

export default createPaymentIntent;
