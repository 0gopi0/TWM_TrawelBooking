const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  numberOfSlots: { type: Number, default: 1 },
  transportOpted: { type: Boolean, default: false },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
  status: { type: String, enum: ['confirmed', 'pending', 'cancelled'], default: 'pending' },
  bookedAt: { type: Date, default: Date.now },
  cancellation: {
    isCancelled: { type: Boolean, default: false },
    cancellationDate: Date,
    cancellationFee: Number,
    refundProcessed: { type: Boolean, default: false }
  }
});

export const Booking = mongoose.model('Booking', BookingSchema);