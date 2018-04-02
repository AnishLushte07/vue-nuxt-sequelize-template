const express = require('express')
const { ensureLoggedIn } = require('connect-ensure-login')

const resourceRoute = require('../components/resource-route')
const user = require('./user')

const router = express.Router()

router.use(ensureLoggedIn('/auth/login'))
router.use('/users', resourceRoute('user', user))

module.exports = router
