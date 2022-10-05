const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');


//Initialize express
const app = express(); 
const port = 80;

// 
dotenv.config({path : './config.env'});

//Connecting to MongoDB server
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(() => {
    console.log('Connection sucessfully to the database.')
}).catch(err => {console.log(err)});

//Middleware
const middleware = (req,res,next) => {
    console.log('This is middleware');
    next();
}


app.get('/', (req, res) => {
    res.send(`First express application.
    (>‿◠)✌
    `)
})
app.get('/about', middleware, (req, res) => {
    console.log('This is about')
    res.send(`About Page.
    (>‿◠)✌
    `)
})
app.get('/contact', (req, res) => {
    res.status(200).send(`Contact Page.
    (>‿◠)✌
    `)
})
app.get('/signin', (req, res) => {
    res.status(200).send(`Login.
    (>‿◠)✌
    `)
})
app.get('/signup', (req, res) => {
    res.status(200).send(`Register.
    (>‿◠)✌
    `)
})

app.listen(port,()=>{
    console.log("Application listening on port " + port);
});