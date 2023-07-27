const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true, min: 4, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
