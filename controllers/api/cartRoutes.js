const router = require('express').Router()
const { Cart } = require('../../models')

router.post('/', async (req, res) => {
    const product = await Cart.findOne({
        where: { user_id: 1, product_id: req.body.productId },
    })
    if (product) {
        res.json('product is already added')
        return
    }
    const cart = await Cart.create({
        user_id: 1,
        product_id: req.body.productId,
    })
    if (cart) {
        console.log('should be good?')
    }
    res.json(cart)
})

module.exports = router
