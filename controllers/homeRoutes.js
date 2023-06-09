const router = require('express').Router()
const { Product, Category, Tag, ProductTag, Cart, User } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            include: [
                {
                    model: Category,
                    params: ['id', 'category_name'],
                },
                {
                    model: Tag,
                    through: {
                        model: ProductTag,
                        attributes: [],
                    },
                },
            ],
        })

        const products = await productData.map((product) =>
            product.get({ plain: true })
        )

        res.render('homepage', {
            products,
            logged_in: req.session.logged_in,
        })
        //res.json(productData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
            include: [
                {
                    model: Category,
                    params: ['id', 'category_name'],
                },
                {
                    model: Tag,
                    through: {
                        model: ProductTag,
                        attributes: [],
                    },
                },
            ],
        })
        console.log(productData)

        const product = await productData.get({ plain: true })
        // res.json(product)

        res.render('product', {
            product,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Product }],
        })

        const user = userData.get({ plain: true })

        res.render('profile', {
            ...user,
            logged_in: true,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/')
        return
    }

    res.render('login')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/aboutus', (req, res) => {
    res.render('aboutus')
})

router.get('/cart', withAuth, async (req, res) => {
    const cart = await User.findByPk(req.session.user_id, {
        include: [{ model: Product, through: Cart }],
    })
    // const products = cart.map((x) => x.product_id)
    const displayCartItems = cart.get({ plain: true })
    const products = displayCartItems.products
    //send products, call them items
    // async function getProductData(id) {
    //     const productData = await Product.findByPk(id, {
    //         include: [
    //             {
    //                 model: Category,
    //                 params: ['id', 'category_name'],
    //             },
    //             {
    //                 model: Tag,
    //                 through: {
    //                     model: ProductTag,
    //                     attributes: [],
    //                 },
    //             },
    //         ],
    //     })

    //     const product = await productData.get({ plain: true })
    //     return product
    // }
    // console.log(displayCartItems)
    // res.json(product)
    console.log(products)
    res.render('cart', { products })
})

module.exports = router
