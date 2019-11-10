const express = require('express');
const userRouter = require('./user');
const HomeController = require('../controllers/HomeController');
const router = express.Router();


router.get('/', HomeController.show);

router.use('/users', userRouter);



module.exports = router;