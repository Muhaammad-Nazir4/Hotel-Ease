// need to set the process.env
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
      // validate: [validator.isEmail, "Please enter valid email"],
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      minlength: 8,
      // select: false,
    },
    role: {
      type: String,
      default: "Guest",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
