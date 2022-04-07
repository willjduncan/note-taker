//Set up the router for any API-labelled GET and POST methods. Currently, there's only Notes, 
//but if this is built upon, the stratification will make for more organized future coding.
const router = require('express').Router();
router.use(require('../apiRoutes/noteRoutes'));

module.exports = router;