/* eslint-disable no-useless-catch */
// client/utils/api.js
import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Replace with your server URL

const api = axios.create({
  baseURL,
  timeout: 5000, // Set the request timeout in milliseconds (optional)
});

export const fetchOrders = async () => {
  try {
    const response = await api.get('/orders');
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMenu = async () => {
    try {
        const response = await api.get('/menu');
        console.log(response)
        return response.data;
      } catch (error) {
        throw error;
      }
}
// Add more API functions for other endpoints if needed

export default api;
