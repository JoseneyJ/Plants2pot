const router = require('express').Router()
const userRoutes = require('./userRoutes')
const cartRoutes = require('./cartRoutes')

// const productRoutes = require('./productRoutes')

router.use('/users', userRoutes)
router.use('/cart', cartRoutes)
// router.use('/products', productRoutes)

module.exports = router
