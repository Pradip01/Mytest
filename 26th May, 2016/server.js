var express = require('express');
var app = express();
var storage = require('node-persist');
app.use(express.static('public'));
storage.initSync();

app.get('/',function(req, res){
    res.send("Hello world");
});
var server = app.listen(8089, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(storage.getItem('name'));
    console.log("Example app listening at http://%s:%s", host, port);

})