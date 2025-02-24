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
  axios
    .post(`${API_BASE_URL}/auth/login`, { email, password })
    .then(function (response) {
      console.log("response", response?.data);
      return response?.data;
    })
    .catch(function (error) {
      return error?.response;
    });
};

// QR code
export const getQRCode = async () => {
  axios
    .get(`${API_BASE_URL}/auth/qr-code-login`)
    .then(function (response) {
      return response?.data;
    })
    .catch(function (error) {
      return error?.response;
    });
};
