const router = require('express').Router();
// const User = require('../../models/user')


const userRoutes = require("./user.js");
const thoughtRoutes = require("./Thought");

router.use('/users', userRoutes);
router.use('/Thought', thoughtRoutes);

module.exports = router;