const categoryModel = require('../models/categoriesModel')

const getCategories = async () => {
    return categoryModel.find({});
}


module.exports = {
    getCategories
}