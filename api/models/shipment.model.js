const mongoose = require("mongoose");

const shipment = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  quantity: {
    type: String,
    required: false,
  },
  service: {
    type: String,
    required: false,
  },
  from_direction: {
    type: String,
    required: false,
  },
  to_direction: {
    type: String,
    required: false,
  },
  date_shipment: {
    type: String,
    required: false,
  },
  date_delivery: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  confirmed: {
    type: String,
    required: false,
  },
  carried_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Carrier",
    required: false,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: false,
  },
});

const Shipment = mongoose.model("Shipment", shipment);

module.exports = Shipment;
