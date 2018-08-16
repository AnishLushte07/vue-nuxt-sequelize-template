const express = require('express')
const { ensureLoggedIn } = require('connect-ensure-login')

const resourceRoute = require('../components/resource-route')

const brand = require('./brand')
const category = require('./category')
const group = require('./group')
const user = require('./user')
const product = require('./product')
const vendor = require('./vendor')
const productVariant = require('./productVariant')
const userMap = require('./userMap')

const router = express.Router()

router.use(ensureLoggedIn('/auth/login'))
router.use('/groups', resourceRoute('group', group))
router.use('/brands', resourceRoute('brand', brand))
router.use('/categories', resourceRoute('category', category))
router.use('/users', resourceRoute('user', user))
router.use('/vendors', resourceRoute('vendor', vendor))
router.use('/products', resourceRoute('product', product))
router.use('/users', resourceRoute('user', user))
router.use('/userMaps', resourceRoute('userMap', userMap))
router.use('/productVariants', resourceRoute('productVariant', productVariant))


module.exports = router
