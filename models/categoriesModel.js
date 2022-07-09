const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const categorySchema = new Schema({
    category: String
},{
    versionKey: false,
    timestamps:true
})

const categoryModel = model('categories', categorySchema);

module.exports = categoryModel;