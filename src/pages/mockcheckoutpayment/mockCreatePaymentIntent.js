import axios from 'axios';

const mockCreatePaymentIntent = async (amount) => {
  try {
    const response = await axios.post('http://localhost:5000/create-payment-intent', { amount });
    return response.data.clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

export default mockCreatePaymentIntent;
