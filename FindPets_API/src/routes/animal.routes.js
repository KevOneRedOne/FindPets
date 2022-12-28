const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animal.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');

router.get('/one', verifyToken, animalController.getAnimal);
router.get('/all', verifyToken, animalController.getAllAnimals);
router.post('/create', verifyAdmin, animalController.createAnimal);
router.put('/update', verifyAdmin, animalController.updateAnimal);
router.delete('/delete', verifyAdmin, animalController.deleteAnimal);

module.exports = router;
