const {Restaurant} = require('../models')
const categories = ['American', 'Italian', 'Chinese', 'Japanese', 'Mexican'];

module.exports.viewAll = async function(req, res) {
    const restaurants = await Restaurant.findAll();
    let searchCategory = 'All';
    let searchCategories = ['All'];
    for (let i = 0; i < categories.length; i++) {
        searchCategories.push(categories[i]);
    }
    res.render('index', {restaurants, categories:searchCategories, searchCategory});
}

module.exports.renderEditForm = async function(req, res) {
    const restaurant = await Restaurant.findByPk(
        req.params.id
    );
    res.render('edit', {restaurant, categories});
}

module.exports.updateRestaurant = async function(req, res) {
    await Restaurant.update(
        {
            name: req.body.name,
            category: req.body.category,
            rating: req.body.rating,
            image: req.body.image,
            description: req.body.description
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deleteRestaurant = async function(req, res) {
    await Restaurant.destroy(
    {
    where:
        {
            id: req.params.id
        }
    });
    res.redirect('/');
}

module.exports.renderAddForm = function(req, res) {
    const restaurant = {
        name: "",
        description: "",
        rating: 1,
        image: "",
        category: categories[0],
    };
    res.render('add', {restaurant, categories});
}

module.exports.addRestaurant = async function(req, res) {
    await Restaurant.create(
        {
            name: req.body.name,
            category: req.body.category,
            rating: req.body.rating,
            image: req.body.image,
            description: req.body.description
        });
    res.redirect('/');
}