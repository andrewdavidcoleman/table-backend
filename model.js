const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  customer: {
    type: String,
    trim: true,
    required: true
  },
  drink: {
    type: String,
    trim: true,
    required: true
  },
  main: {
    type: String,
    trim: true,
    required: true
  },
  side1: {
    type: String,
    trim: true,
    required: true
  },
  side2: {
    type: String,
    trim: true,
    required: true
  }
});

var Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
