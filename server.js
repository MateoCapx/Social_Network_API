const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const User = require('./models/user')

const app = express();
const PORT = process.env.PORT || 3001;

//connect to mongodb
const dbURI = "mongodb+srv://mateoApp:Chillen16@socialmediaapp.oviqcwt.mongodb.net/?retryWrites=true&w=majority"


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// Adding one user to database
// app.get('/user', (req, res) => {
//     const user = new User({
//         username: 'Jone',
//         email: 'John@gmail.com'
//     });
//     user.save()
//         .then((results) => {
//             res.send(results)
//         }).catch((err) => {
//             console.log(err)
//         })
// })

// // Getting all users from database
// app.get('/all-user', (req, res) => {
//     User.find()
//     .then((results) => {
//         res.send(results)
//     }).catch((err) => {
//         console.log(err)
//     })
// })

// // Getting a Single user from database
// app.get('/single-user', (req, res) => {
//     User.findById('6320a047ab40c696d9f0413c')
//     .then((results) => {
//         res.send(results)
//     }).catch((err) => {
//         console.log(err)
//     })

// })



// creates connection to Database
mongoose.connect(process.env.MONGODB_URI || dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

// Use this to log mongo queries being executed!
mongoose.set('debug', true);
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
