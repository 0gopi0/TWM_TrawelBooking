const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional: if specific user notification
  type: { type: String, enum: ['info', 'success', 'error', 'booking', 'payment', 'general'], default: 'general' },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export const Notification = mongoose.model('Notification', NotificationSchema);