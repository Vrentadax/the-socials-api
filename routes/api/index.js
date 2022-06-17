const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// This code is using the express router to route the apiRoutes to the /api route.
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;