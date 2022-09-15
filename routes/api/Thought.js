const router = require('express').Router();


const {
  getAllThoughts,
  getThoughtById,
//   createUser,
//   updateUser,
}  = require('../../controllers/thoughts-controller');

// /api/users
router
  .route('/')
  .get(getAllThoughts)
//   .post(createUser);

// /api/users/:id
router
  .route('/:id')
  .get(getThoughtById)
//   .put(updateUser)

module.exports = router;






