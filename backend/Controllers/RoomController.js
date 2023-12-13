const Room = require("../Models/Room");

const AddRoom = async (req, res) => {
  try {
    const Data = req.body;

    const room = await Room.create(Data); // Create a new user
    res.status(201).json({ Message: "Room is Added", Room: room }); // Send the user data  });
  } catch (err) {
    console.log(err);
    res.status(400).json({ Message: "Error", err: err.message });
  }
};

const GetRoom = async (req, res) => {
  try {
    const room = await Room.find({});
    res.status(200).json({ Message: "All Room Data", Room: room });
  } catch (err) {
    res.status(400).json({ Message: "Error", err: err.message });
  }
};

const EditRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const Data = req.body;
    const room = await Room.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.status(200).json({ Message: "Room Is Updated", Room: room });
  } catch (err) {
    console.log(err);
    res.status(400).json({ Message: "Error", err: err.message });
  }
};

// delete employee
const DeleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findByIdAndDelete(id);
    res.status(200).json({ Message: "Room Is Deleted", Room: room });
  } catch (err) {
    res.status(400).json({ Message: "Error", err: err.message });
  }
};
module.exports = { AddRoom, GetRoom, EditRoom, DeleteRoom };
