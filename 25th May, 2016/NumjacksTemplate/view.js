var express = require('express');
var nunjucks = require('nunjucks');

var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    console.log('testing');
    res.render('index.html',{ name: 'Henry', street: 'qqqqqqq',phone:'9874563210' });
});

app.listen(8081);