const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./apis')

app.use(cors());
app.use(express.json());
app.use(router);

require('./db/mongodb');

const PORT = 4005

app.listen(PORT, () =>{
    console.log(`The server is running on port: ${PORT}`)
})