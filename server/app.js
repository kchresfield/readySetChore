require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../back-end/database.js');
const path = require('path')
// const client = require('../client/src/index.jsx');

const app = express();

app.use(express.static(path.join(__dirname, '../client/html')));
app.use(bodyParser.json());

// app.get('/api', (req, res) => {
//     console.log("test")
//     res.json({ message: "Hello from server!" });
// })


module.exports = app