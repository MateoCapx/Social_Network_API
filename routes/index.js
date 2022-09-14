const router = require('express').Router();
const User = require('../models/user')
apiRoutes = require('./api')
 

router.get('/',(req,res)=>{
    console.log("Route Works ")
})

router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.status(404).send('<h1>😝 404 Error!</h1>');
// });

module.exports = router;







