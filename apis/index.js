const express = require('express');
const router = express.Router();

const booksRouter = require('./books');
const categoriesRouter = require('./categories');

router.use('/categories', categoriesRouter);
router.use('/books', booksRouter);



module.exports = router;