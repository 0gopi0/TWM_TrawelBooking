const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  difficulty: { type: String, enum: ['easy', 'moderate', 'hard'] },
  minAge: Number,
  images: [String]
});

export const Activity = mongoose.model('Activity', ActivitySchema);
