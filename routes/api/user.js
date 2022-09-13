const router = require('express').Router();
const User = require('../../models/user')


 
// Adding one user to database
router.get('/user', (req, res) => {
    const user = new User({
        username: 'Jone',
        email: 'John@gmail.com'
    });
    user.save()
        .then((results) => {
            res.send(results)
        }).catch((err) => {
            console.log(err)
        })
})

// Getting all users from database
router.get('/all-user', (req, res) => {
    User.find()
    .then((results) => {
        res.send(results)
    }).catch((err) => {
        console.log(err)
    })
})

// Getting a Single user from database
router.get('/single-user', (req, res) => {
    User.findById('6320a047ab40c696d9f0413c')
    .then((results) => {
        res.send(results)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;