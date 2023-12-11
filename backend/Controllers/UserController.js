const User = require("../Models/User");

const AddUser = async (req, res) => {
  try {
    const Data = req.body;
    console.log(Data);
    const user = await User.create(Data); // Create a new user
    res.status(201).json({ Message: "User Is Added", User: user }); // Send the user data  });
  } catch (err) {
    console.log(err);
    res.status(400).json({ Message: "Error", err: err.message });
  }
};

// login a User
async function login(req, res, next) {
  const { email, password } = req.body;
  const Email = email;
  try {
    const user = await User.findOne({ Email });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.Password != password)
      return res.status(401).json({ error: "Invalid credentials" });
    
    return res.status(200).json({
      message: "User logged in successfully",
      email: user.Email,
      userid: user._id,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

module.exports = { AddUser, login };
