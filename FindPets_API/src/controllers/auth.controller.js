const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Read
exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with email " + req.body.email,
        });
      }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Password not valid",
          auth: false,
        });
      }
      let userToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.SECRET_KEY
      );
      res.send({
        message: "User connected",
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => {
      res.status(400).send(err);
      console.log(err);
    });
};

// CRUD
// Create
exports.register = (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 10);
  // Create a User
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });
  newUser
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
