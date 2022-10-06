const mongoose = require('mongoose');

const DB = process.env.DATABASE;


//Connecting to MongoDB server
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(() => {
    console.log('Connection sucessfully to the database.')
}).catch(err => {console.log(err)});