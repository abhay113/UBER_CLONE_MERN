const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')

const app = express();

const connectToDB = require('./db/db')
connectToDB();
app.use(cors())


app.get('/', (req, res) => {
    res.send('hello world');
})