const express = require("express");
const api = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// Importation des routes et du fichiers index.js du fichier routes
const apiRouter = require("./routes");

// middleware => bodyParser sert à parser les données reçues dans le body de la requête en format json
api.use(bodyParser.json());

// Login Database
mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("You are successfully connected to database");
  })
  .catch((err) => console.log(err));
mongoose.set('strictQuery', true);

api.use("/api/findpets/v1", apiRouter);

// Method launch app
api.listen(process.env.PORT, function () {
    console.log("Server Up");
});
  