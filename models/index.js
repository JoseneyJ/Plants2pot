const Product = require('./product')
const Category = require('./category')
const Tag = require('./tag')
const ProductTag = require('./productTag')
const Image = require('./Image')
const Cart = require('./Cart')
const User = require('./Users')

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
    through: Cart,
    foreignKey: 'product_id',
})

User.belongsToMany(Product, {
    through: Cart,
    foreignKey: 'user_id',
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
