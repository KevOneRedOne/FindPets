const animal = require('../models/animal.model.js');

// CRUD - CREATE, READ, UPDATE, DELETE
exports.createAnimal = (req, res) => {
    // Create a new animal
    const newAnimal = new animal(req.body);
    // Save animal in the database
    newAnimal.save()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};

// READ - Animal
exports.getAnimal = (req, res) => {
    // Find one by id
    animal.findById(req.params.id)
    // callback
    .then((animal) => {
        if (!animal) {
            return res.status(404).send({
                message: "Animal not found with id "
            });
        }
        res.send(animal);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};

// READ - All Animals
exports.getAllAnimals = (req, res) => {
    // Find all
    animal.find()
    // callback
    .then((animals) => {
        if (!animals) {
            return res.status(404).send({
                message: "Animals not found"
            });
        }
        res.send(animals);
    })
    .catch((err) => {
        console.log(err);
        res
        .status(400)
        .send
        (err);
    });
};


// UPDATE - Update animal (admin only)
exports.updateAnimal = (req, res) => {
    // Update one by id
    animal.findByIdAndUpdate(req.params.id, req.body)
    .then((animal) => {
        if (!animal) {
            return res.status(404).send({
                message: "Animal not found with id " + req.params.id
            });
        }
        animal.findById(animal._id).then((animal) => {
            res.send(animal);
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};

// DELETE - Delete animal (admin only)
exports.deleteAnimal = (req, res) => {
    animal.findByIdAndDelete(req.params.id)
    .then((animal) => {
        if (!animal) {
            return res.status(404).send({
                message: "Animal not found with id " + req.params.id
            });
        }
        res.send(animal);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
};

