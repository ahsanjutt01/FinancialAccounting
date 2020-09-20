const express = require('express');
const bodyparser = require('body-parser');


const mongoConnect = require('./utils/database');
const userRoute = require('./_routes/user');


const app = express();

app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ extended: false}));

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', userRoute);

app.use('/', (req, res, next) => {
    return res.status(404).json('404 error Api not found');
});

mongoConnect((client => {
    // console.log(client)
    app.listen(3000);
    console.log('server is started on port 3000');
}));
