const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

// Use environment variables
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

app.get("/api/v1/", (req, res) => {
  res.send({ message: "Hello World" });
});

// User routes
app.use("/api/v1/users", require("./routes/userRoutes"));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
