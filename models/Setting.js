const mongoose = require('mongoose');

const SettingSchema = new mongoose.Schema({
  key: { type: String, unique: true, required: true },
  value: mongoose.Schema.Types.Mixed // Allows for flexible data types (numbers, strings, objects, arrays)
});

export const Setting = mongoose.model('Setting', SettingSchema);
