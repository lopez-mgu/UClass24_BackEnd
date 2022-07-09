const mongoose = require('mongoose');

const url = 'mongodb+srv://Miguel:ucamp7@library.nudtji4.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, {}, () => {
    console.log('-----------')
    console.log('Conexion a la base de datos exitosa')
    console.log('-----------')
})

module.exports = mongoose;