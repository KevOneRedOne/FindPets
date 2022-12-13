const express = require("express");
const api = express();
const mongoose = require("mongoose");

// Login Database
mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("You are successfully connected to database");
  })
  .catch((err) => console.log(err));

  
// Method launch app
api.listen(process.env.PORT, function () {
    console.log("Server Up");
});
  