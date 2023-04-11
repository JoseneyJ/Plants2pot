const router = require('express').Router()
const { Cart } = require('../../models')

router.post('/', async (req, res) => {
    console.log({
        user_id: req.session.user_id,
        product_id: req.body.productId,
    })
    const product = await Cart.findOne({
        where: { user_id: req.session.user_id, product_id: req.body.productId },
    })
    if (product) {
        res.json('product is already added')
        return
    }
    const cart = await Cart.create({
        user_id: req.session.user_id,
        product_id: req.body.productId,
    })
    if (cart) {
        console.log('should be good?')
    }
    res.json(cart)
})

module.exports = router
