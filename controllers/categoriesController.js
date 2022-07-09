const categoryModel = require('../models/categoriesModel')

const getCategories = async () => {
    return categoryModel.find({}).exec();
}


module.exports = {
    getCategories
}