const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  gender: String,
  age: Number,
  role: { type: String, enum: ['user', 'admin', 'guide'], default: 'user' },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now }
});

export const User = mongoose.model('User', UserSchema);
