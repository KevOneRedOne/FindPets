const express = require("express");
const api = express();


// Méthode launch app
api.listen(process.env.PORT, function () {
    console.log("Server Up");
});
  