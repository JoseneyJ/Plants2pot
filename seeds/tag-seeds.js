const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "succulents",
  },
  {
    tag_name: "multicolor",
  },
  {
    tag_name: "rare",
  },
  {
    tag_name: "evergreen",
  },
  {
    tag_name: "fruits and berries",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
