var express = require("express");
var app = express();
app.set('views', './');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('vd', { name: 'Henry', street: 'qqqqqqq',phone:'9874563210' });

});
app.listen(8081);
