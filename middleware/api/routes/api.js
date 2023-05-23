'use strict'

const router = require('express').Router();

var apiAuth = require('./api/auth/auth-router');
router.use('/auth', apiAuth);

var apiRoutes = require('./api/routes/route-router');
router.use('/route', apiRoutes)

module.exports = router;