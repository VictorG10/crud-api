const express = require("express");
const PORT = process.env.PORT || 7000;
const logger = require("./middleware/logger");
const mongoose = require("mongoose");

const app = express();

app.use(logger);
app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(
    "mongodb+srv://VG:victorgbadebo10@backenddb.o02e6gb.mongodb.net/Crud API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch(() => {
    console.log("Connection failed!");
  });
