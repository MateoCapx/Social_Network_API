const router = require('express').Router();


const {
    getAllThoughts,
    getThoughtById,
      createThought,
      updateThought,
} = require('../../controllers/thoughts-controller');

// /api/users
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/users/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    

module.exports = router;






