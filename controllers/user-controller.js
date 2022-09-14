const { user } = require('../models/user')


const userController = {
    // get all users
    getAllUsers(req, res) {
        user.find({})
        .populate({
            path: 'users',
            select: '-__v'
          })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

      // get one User by id
  getUserById({ params }, res) {
    user.findById({ _id: params.id })
      .populate({
        path: 'user',
        
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },


    // create user
    createUser({ body }, res) {
        user.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // update User by id
    updateUser({ params, body }, res) {
        user.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

}

module.exports = userController;

