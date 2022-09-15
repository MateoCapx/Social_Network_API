const mongoose = require('mongoose');

//connect to mongodb
const dbURI = "mongodb://localhost:27017/socialmedia "

// creates connection to Database
mongoose.connect(process.env.MONGODB_URI || dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));


module.exports = mongoose.connection;