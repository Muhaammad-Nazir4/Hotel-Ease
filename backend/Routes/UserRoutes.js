const express = require("express");
const router = express.Router();
const { AddUser, login } = require("../Controllers/UserController");

router.post("/signup", AddUser);
router.post("/signin", login);

module.exports = router;
