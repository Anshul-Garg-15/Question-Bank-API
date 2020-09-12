const express = require('express');
const app = express();
const port = 4000;

const cookieParser = require('cookie-parser');
 const db = require('./config/mongoose');


app.use(express.urlencoded());

app.use(cookieParser());




app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is Running on : ${port}`);
});