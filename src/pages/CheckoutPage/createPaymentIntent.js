import axios from 'axios';

const createPaymentIntent = async (items) => {
  try {
    // Make a POST request to your backend to create the payment intent
    const response = await axios.post('http://localhost:5000/create-payment-intent', {
      items,  // Make sure 'items' is being sent to the backend
    });

    // Return the client secret from the response
    return response.data.clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

export default createPaymentIntent;
