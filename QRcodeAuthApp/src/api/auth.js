import axios from 'axios';

const API_BASE_URL = process.env.API_PATH;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
