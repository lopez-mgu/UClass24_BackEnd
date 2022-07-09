const bookModel = require('../models/booksModel')

const getBooks = async () => {
    return bookModel.find({});
}

const createBook = async (body) =>{
    const newBook = new bookModel(body)
    newBook.save()
    return newBook
}

const updateBook = async (_id, updateObject) =>{
    return bookModel.findOneAndUpdate({_id}, updateObject, {
        upsert: false,
        new: true
    }) 
}

const deleteBook = async (_id) =>{
    return bookModel.findOneAndDelete({_id})
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
}