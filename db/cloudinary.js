const axios = require("axios");

const cloudinary = axios.create({
  baseURL: `https://api.cloudinary.com/`,
  timeout: 3000,
});

module.exports = { cloudinary };
