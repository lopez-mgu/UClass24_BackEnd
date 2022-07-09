const express = require('express');
const router = express.Router();

const booksRouter = require('./books');
const categoriesRouter = require('./categories');

router.use('/books', booksRouter);

router.use('/categories', booksRouter);

module.exports = router;