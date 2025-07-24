const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  amount: { type: Number, required: true },
  paymentMode: { type: String, enum: ['card', 'upi', 'cash', 'wallet'], required: true },
  status: { type: String, enum: ['initiated', 'completed', 'failed', 'refunded'], default: 'initiated' },
  transactionId: String,
  paidAt: { type: Date, default: Date.now }
});

export const Payment = mongoose.model('Payment', PaymentSchema);