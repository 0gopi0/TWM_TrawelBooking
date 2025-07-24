const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: {
    name: String,
    address: String,
    coordinates: { lat: Number, lng: Number }
  },
  departure: String,
  duration: { days: Number, nights: Number },
  startDate: Date,
  endDate: Date,
  itinerary: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }],
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
  price: {
    withTransport: Number,
    withoutTransport: Number,
    discount: Number
  },
  photos: [String],
  availableSeats: Number,
  minParticipants: Number,
  maxParticipants: Number,
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  guides: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  category: { type: String, enum: ['trek', 'camping', 'beach', 'historic', 'wildlife'] },
  tags: [String],
  ratings: { type: Number, default: 0 }, // Average rating
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  isActive: { type: Boolean, default: true }
});

export const Trip = mongoose.model('Trip', TripSchema);