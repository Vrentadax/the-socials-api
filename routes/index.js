const router = require('express').Router();
const apiRoutes = require('./api');

/* This code is using the express router to route the apiRoutes to the /api route. */
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('404 Error!');
});

module.exports = router;