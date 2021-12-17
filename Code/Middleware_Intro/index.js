const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/dogs', (req, res) => {
    res.send('I AM A DOG WOOF')
})

app.listen(3000, () => {
    console.log("APP IS RUNNING ON LOCAL HOST 3000")
})