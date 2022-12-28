const express = require('express');
const router = express.Router();
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');
const animalRouter = require('./animal.routes');

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/animal', animalRouter);

module.exports = router;