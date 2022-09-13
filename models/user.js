const mongoose =require('mongoose');
const Schema = mongoose.Schema;

// const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    // thoughts: {
     
    // },
    // friends: {
    

    // },
  },
  
//   {
//     toJSON: {
//       virtuals: true,
//       getters: true
//     },
//     // prevents virtuals from creating duplicate of _id as `id`
//     id: false
//   },
  
 {timestamps:true});



// get total count of comments and replies on retrieval
// PizzaSchema.virtual('commentCount').get(function() {
//   return this.comments.reduce(
//     (total, comment) => total + comment.replies.length + 1,
//     0
//   );
// });

const User = mongoose.model('User',UserSchema)

module.exports = User;