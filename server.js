const express = require('express');
const cors = require('cors');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect data to node
mongoose.connect("mongodb://localhost:27017/{INSERT DB HERE}");

mongoose.connection.on('connected', () =>{
    console.log('Connected to database');
});
mongoose.connection.on('error', (err) =>{
    console.log('database error');
});

//middleware cors
app.use(cors());
//middleware bodyparser
app.use(bodyParser.json());

//connecting routes
const api = require('./routes/routes');
app.use('/api',api);

//index route
app.get('/',(req,res)=>{
    res.send('invalid endpoint');
})


//starting server
app.listen(3000, function(){
    console.log('listening on 3000');
});