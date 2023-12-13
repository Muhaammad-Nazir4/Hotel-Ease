const express = require("express");
const Connection = require("./utils/database");
const UserRoutes = require("./Routes/UserRoutes");
const EmployeeRoutes = require("./Routes/EmployeeRoutes");
const RoomRoutes = require("./Routes/RoomRoutes");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;

app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use("/user", UserRoutes);
app.use("/Employee", EmployeeRoutes);
app.use("/Room", RoomRoutes);

app.listen(port, () => {
  Connection();
  console.log(`Server is running on port ${port}`);
});
