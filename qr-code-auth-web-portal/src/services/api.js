import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Register
export const register = async (userData) => {
  axios
    .post(`${API_BASE_URL}/auth/login`, userData)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      return error?.response;
    });
};

// Login
export const login = async (email, password) => {
  try {
    let res = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    throw error.response;
  }
};

// QR code
export const getQRCodeToken = async () => {
  try {
    let res = await axios.get(`${API_BASE_URL}/auth/qr-code-token`);
    return res.data;
  } catch (error) {
    throw error.response;
  }
};
