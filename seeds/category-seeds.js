const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Indoor plants",
  },
  {
    category_name: "Outdoor plants",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
