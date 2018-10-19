const express=require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/nodedemo",{ useNewUrlParser: true });
app.use(express.static('public'));
//const bodyParser = require('body-parser');
app.use(express.urlencoded());
app.use(express.json());
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});
app.use('/api',require('./route/api'));

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
