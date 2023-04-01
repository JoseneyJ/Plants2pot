const router = require('express').Router()
const { Product, Category, Tag, ProductTag } = require('../models')
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
            ...product,
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
        res.redirect('/profile')
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

module.exports = router
