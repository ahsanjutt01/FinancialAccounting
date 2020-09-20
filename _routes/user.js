const express = require('express');

const userController = require('../_controllers/user');


const router = express();

router.post('/signup', userController.postSignUp);


module.exports = router;