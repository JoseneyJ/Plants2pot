const Product = require('./product')
const Category = require('./category')
const Tag = require('./tag')
const ProductTag = require('./productTag')
const Image = require('./Image')
const User = require('./users')

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

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
    Image,
    User,
}
