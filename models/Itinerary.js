const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
  day: { type: Number, required: true },
  time: String,
  activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
  description: String,
  mealIncluded: { type: Boolean, default: false },
  notes: String
});

export const Itinerary = mongoose.model('Itinerary', ItinerarySchema);