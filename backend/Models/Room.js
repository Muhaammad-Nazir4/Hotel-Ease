const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  floorNumber: {
    type: Number,
    // required: true,
  },
  roomNumber: {
    type: Number,
    required: true,
    // unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
