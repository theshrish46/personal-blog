const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  useremail: { type: String, unique: true },
  password: { type: String },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
