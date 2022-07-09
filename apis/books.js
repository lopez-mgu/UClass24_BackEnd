const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { booksController } = require('../controllers');

const { getBooks, createBook, updateBook, deleteBook } = booksController;

router.get('/', async (_, res) =>{
    const books = await getBooks()
    res.send(books)
})

router.post('/', async (req, res) =>{
    const body = req.body

    try{
        const newBook = await createBook(body)
        res.status(201)
        res.send(newBook)
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError){
            res.status(400)
            return res.send({
                message: 'Error de Validacion',
                error: error.message
            })
        }
        res.status(500)
        return res.send({
            error: error.message
        })
    }
})

router.purge('/:id', async (req,res) =>{
    const { id } = req.params
    const body = req.body
    const book = await updateBook(id, body)

    if(!book){
        res.status(404)
        return res.send({
            message: `El libro con id: ${id}, no existe`
        })
    }
    res.send(book)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const result = await deleteBook(id);
    res.send(result);
})

module.exports = router;