const mongoose = require("mongoose");

const carrier = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: false,
  },
  zip_code: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  nif: {
    type: String,
    required: true,
    unique: true,
  },
  cif: {
    type: String,
    required: true,
    unique: true,
  },
  img_profile: {
    type: String,
    required: false,
  },
});

const Carrier = mongoose.model("Carrier", carrier);

module.exports = Carrier;
