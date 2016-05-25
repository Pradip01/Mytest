var express = require("express");
var app = express();
app.set('views', './');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});

});
app.listen(8089);