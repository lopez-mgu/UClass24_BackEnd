const mongoose = require('mongoose');
require('dotenv').config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.mongodb.net/Library?retryWrites=true&w=majority`

mongoose.connect(url, {}, () => {
    console.log('-----------')
    console.log('Conexion a la base de datos exitosa')
    console.log('-----------')
})

module.exports = mongoose;