const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const categorySchema = new Schema({
    category: {
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps:true
})

const categoryModel = model('categories', categorySchema);

module.exports = categoryModel;