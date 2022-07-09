const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { categoriesController } = require('../controllers');

const { getCategories } = categoriesController;

router.get('/', async (_, res) =>{
    const categories = await getCategories()
    res.send(categories)
})

module.exports = router;