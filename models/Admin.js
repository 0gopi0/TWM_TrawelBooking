const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  permissions: [String] // e.g., ['manage_users', 'manage_trips', 'view_bookings', 'manage_content']
});

export const Admin = mongoose.model('Admin', AdminSchema);