const Product = require('./Product')
const Category = require('./Category')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')
const Image = require('./Image')

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
}
