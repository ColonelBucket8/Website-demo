const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    // res.send('SORRY YOU NEED A PASSWORD!!!')
    throw new Error('Password required!')
})

// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!")
//     return next();
// })

// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE!!!")
//     return next();
// })


app.get('/', (req, res) => {
    console.log(`REQUEST DATE ${req.requestTime}`)
    res.send('home page')
})

app.get('/error', (req, res) => {
    chcken.fly()
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE ${req.requestTime}`)
    res.send('I AM A DOG WOOF')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.use((err, req, res, next) => {
    console.log("****************")
    console.log("*****ERROR*****")
    console.log("****************")
    console.log(err)
    next(err);
})

app.listen(3000, () => {
    console.log("APP IS RUNNING ON LOCAL HOST 3000")
})