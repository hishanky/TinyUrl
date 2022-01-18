const express = require("express");
const app = express();
const dotenv = require("dotenv");
const createRoutes = require("./routes/create");
const fetchRoutes = require("./routes/fetch");
dotenv.config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
  res.send("health is good and server is up and running");
});
app.use("", fetchRoutes);
app.use("/create", createRoutes);

app.listen(process.env.PORT, () => {
  console.log("port is listing on " + process.env.PORT);
});
