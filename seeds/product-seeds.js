const { Product } = require('../models')

const productData = [
    {
        product_name: 'Mixed Aeonium',
        price: 16.49,
        stock: 14,
        description:
            'This succulent is a natural hybrid that results from a cross between Aeonium lindleyi and Aeonium tabuliforme. It occurs on rocks by the coast below Taganana in the northeast of Tenerife, Canary Islands, at elevations of about 1,480 feet (450 m)',
        image_source: 'mixedaeonium.jpg',
        category_id: 1,
    },
    {
        product_name: 'White strawberry',
        price: 17.0,
        stock: 25,
        description:
            'White strawberries are a strawberry variety from Japan. The most popular variety, the jewel strawberry, has been around since 2012.They are sweeter, larger, softer moutful',
        image_source: 'whitestrawberry.jpg',
        category_id: 2,
    },
    {
        product_name: 'Pink Crown Cactus',
        price: 16.99,
        stock: 12,
        description:
            'Native to the land of Mexico, this powder puff cactus grows in a singular mound, which is adorned with a crown of bright pink flowers.',
        image_source: 'pinkcrowncactus.jpg',
        category_id: 1,
    },
    {
        product_name: 'English Lavender',
        price: 20.99,
        stock: 50,
        description:
            'English lavender is known as a true lavender, and it’s frequently planted commercially for a source of lavender oil for making perfumes. English lavender is also a favorite type of lavender for use in the kitchen.',
        image_source: 'englishlavender.jpg',
        category_id: 2,
    },
    {
        product_name: 'Bamboo Palm',
        price: 75.99,
        stock: 22,
        description:
            "This palm's name is often used for several different palms but all have the distinct look of bamboo. These chamadoreas grow slowly with a clustering, spreading habit.",
        image_source: 'Bamboopalm.jpg',
        category_id: 2,
    },
    {
        product_name: 'Ugandan Aloe',
        price: 17.99,
        stock: 2,
        description:
            'Aloes are a vital part of the environment. They act as nurses or protectors for other plants, provide nectar for hundreds of species …',
        image_source: 'ugandanaloe.jpeg',
        category_id: 2,
    },
    {
        product_name: 'African violet with pink flowers',
        price: 3.99,
        stock: 75,
        description:
            'Tommie Lou is a well-known cultivar with variegated leaves and pink flowers. This variety was the first African Violet to be purposefully bred as a variegated plant. It features white edging around the leaves.',
        image_source: 'africanviolet.jpg',
        category_id: 1,
    },
    {
        product_name: 'Contortion succulent',
        price: 22.99,
        stock: 15,
        description:
            'These are amazing plants, with extraordinary growthpatterns. They are a gorgeous, rich green, and can grow into very unusual shapes and formations. Its important to be aware that these plants are hard to grow,',
        image_source: 'contortionsucculent.jpg',
        category_id: 1,
    },
    {
        product_name: 'Red Angel Trumpet',
        price: 15.0,
        stock: 7,
        description:
            "Angel's trumpets are evergreen plants with many branching trunks and are typically less than 8 metres (26 feet) in height",
        image_source: 'redangeltrumpet.jpg',
        category_id: 2,
    },
    {
        product_name: 'Ruby Red Kiwi',
        price: 29.99,
        stock: 22,
        description:
            'Grown on orchards in New Zealand.Characterized by its ruby red flesh and berry sweet flavor',
        image_source: 'rubyredkiwi.jpeg',
        category_id: 2,
    },
    {
        product_name: 'Claret Sunflower',
        price: 100.0,
        stock: 10,
        description:
            'Plant Common Name Annual Sunflower, Claret Sunflower General Description Claret sunflowers are deepest chocolate red with nearly black centers. These long-stemmed flowers are borne on medium sized, well-branched plants.',
        image_source: 'claretsunflower.jpeg',
        category_id: 2,
    },
    {
        product_name: 'Rainbow Eucalyptus',
        price: 49.99,
        stock: 5,
        description:
            'The rainbow eucalyptus tree is a stunning sight with its colorful bark that peels off in patches, revealing a spectrum of hues from green to purple.',
        image_source: 'rainboweucalyptus.jpeg',
        category_id: 2,
    },
]

const seedProducts = () => Product.bulkCreate(productData)

module.exports = seedProducts
