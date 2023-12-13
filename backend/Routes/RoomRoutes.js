const express = require("express");
const router = express.Router();
const {
  AddRoom,
  GetRoom,
  EditRoom,
  DeleteRoom,
} = require("../Controllers/RoomController");

router.post("/AddRoom", AddRoom);
router.get("/GetRoom", GetRoom);
router.put("/EditRoom/:id", EditRoom);
router.delete("/DeleteRoom/:id", DeleteRoom);
module.exports = router;
