const express = require('express');
const { userRegistration, userLoggedIn } = require('./user.controller');
const router = express.Router();

// register routes
router.post('/register', userRegistration)

// login routes
router.post('/login', userLoggedIn)


module.exports = router;