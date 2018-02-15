var express = require('express')
var jobs = require('../jobs/index')
var controllers = require('../controllers/index')
var models = require('../models/index')
var services = require('../services/index')

let router = express()

router.use('/', controllers.authentication())

router.use('/logout', controllers.logout())

module.exports = router