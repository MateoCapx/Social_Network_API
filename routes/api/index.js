const router = require('express').Router();
// const User = require('../../models/user')


const userRoutes = require("./user.js");


router.use('/users', userRoutes);
 

module.exports = router;