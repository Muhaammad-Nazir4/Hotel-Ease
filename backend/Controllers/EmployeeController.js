const Employee = require("../Models/Employee");

const AddEmployee = async (req, res) => {
  try {
    const Data = req.body;
    console.log(Data);
    const employee = await Employee.create(Data); // Create a new user
    res.status(201).json({ Message: "Employee Is Added", Employee: employee }); // Send the user data  });
  } catch (err) {
    console.log(err);
    res.status(400).json({ Message: "Error", err: err.message });
  }
};

const GetEmployee = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(200).json({ Message: "All Employee Data", Employee: employee });
  } catch (err) {
    res.status(400).json({ Message: "Error", err: err.message });
  }
};

const EditEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const Data = req.body;
    const employee = await Employee.findByIdAndUpdate(id, Data);
    res
      .status(200)
      .json({ Message: "Employee Is Updated", Employee: employee });
  } catch (err) {
    res.status(400).json({ Message: "Error", err: err.message });
  }
};

// delete employee
const DeleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    res
      .status(200)
      .json({ Message: "Employee Is Deleted", Employee: employee });
  } catch (err) {
    res.status(400).json({ Message: "Error", err: err.message });
  }
};
module.exports = { AddEmployee, GetEmployee, EditEmployee, DeleteEmployee };
