const express = require("express");
const router = express.Router();
const {
  AddEmployee,
  GetEmployee,
  EditEmployee,
  DeleteEmployee,
} = require("../Controllers/EmployeeController");

router.post("/AddEmployee", AddEmployee);
router.get("/GetEmployee", GetEmployee);
router.put("/EditEmployee/:id", EditEmployee);
router.delete("/DeleteEmployee/:id", DeleteEmployee);
module.exports = router;
