const express = require('express');
const { createUser } = require('../Controller/usersHandler');
const router = express.Router();

router
    .route('/users')
    .post(createUser);


module.exports = router