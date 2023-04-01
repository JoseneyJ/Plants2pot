const router = require('express').Router()
const userRoutes = require('./userRoutes')
<<<<<<< HEAD
const productRoutes = require('./productRoutes')

router.use('/users', userRoutes)
router.use('/products', productRoutes)
=======
const productRoutes = require('./productRoutes');

router.use('/users', userRoutes)
router.use('/products', productRoutes);
>>>>>>> e83e39c3b81aa5eabc95e69fcbddafab3f8be410

module.exports = router
