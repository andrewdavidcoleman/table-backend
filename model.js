const mongoose = require('mongoose');

const BreakfastSchema = mongoose.Schema({
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

var Breakfast = mongoose.model("Breakfast", BreakfastSchema);

module.exports = Breakfast;
