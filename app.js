// External Imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Internal Imports

// configuration
dotenv.config();
const app = express();

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Database Connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });
// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing setup
app.get("/", (req, res) => {
  
});

//Create Server
app.listen(process.env.PORT, () => {
  console.log(`app listening to port http://localhost:${process.env.PORT}`);
});
