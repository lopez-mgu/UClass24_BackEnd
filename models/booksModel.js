const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    author: {
        type: String,
        required: true
    },
    editorial: String,
    year: String,
    country: String,
    num_pages: Number,
    availibility: Boolean, //To be changed to availability
    category: String
    
},{
    versionKey: false,
    timestamps:true
})

const bookModel = model('books', bookSchema);

module.exports = bookModel;
