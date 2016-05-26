var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

//app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/index.html', function (req, res) {
    //res.sendFile( __dirname + "/" + "index.html" );
    res.render('vd.html');
})


app.get('/process_get', function (req, res) {

    // Prepare output in JSON format
    //response = {
    //    first_name:req.query.first_name,
    //    last_name:req.query.last_name
    //};
    response = {
        name:req.query.name,
        phone:req.query.phone,
        email:req.query.email,
        gender:req.query.gender
    };
    console.log(response);
    //res.end(JSON.stringify(response));
    res.render('show.html',response);
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})