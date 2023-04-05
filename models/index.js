const Product = require('./Product')
const Category = require('./Category')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')
const Image = require('./Image')
const User = require('./users')
const Cart = require('./Cart')

Product.belongsTo(Category, {
    foreignKey: 'category_id',
})

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})

Product.belongsToMany(Tag, {
    through: 'ProductTag',
})

Tag.belongsToMany(Product, {
    through: 'ProductTag',
})

Image.belongsTo(Product, {
    foreignKey: 'product_id',
})

Product.belongsToMany(User, {
    through: 'Cart',
})

User.belongsToMany(Product, {
    through: 'Cart',
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
    Image,
    User,
    Cart,
}
