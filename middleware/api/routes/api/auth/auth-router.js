'use strict'

const router = require('express').Router()
const AuthController = require('../../../controller/auth-controller')

const LOGIN_ROUTER = '/login'

router.post(LOGIN_ROUTER, AuthController.login)

module.exports = router
