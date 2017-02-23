var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname +'/app/index.html'));
});

app.use(express.static('app'));

app.listen(80,'0.0.0.0',function(){
    console.log('listening on port 80');
});