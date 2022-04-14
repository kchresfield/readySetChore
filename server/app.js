require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../back-end/database.js');
const client = require('../front-end/client.js');

const app = express();

app.use('/', (req, res) => {
    console.log("Hello World")
})


module.exports = app