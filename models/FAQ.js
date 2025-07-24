const mongoose = require('mongoose');

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: String,
  lastUpdated: { type: Date, default: Date.now }
});

export const FAQ = mongoose.model('FAQ', FAQSchema);