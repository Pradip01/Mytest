
var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.post('/form', function (req, res) {

    res.render('form.html');
})


    app.get('/process_get', function (req, res) {

        var insertDocument = function(db, callback) {

        db.collection('response').insertOne({
            response: {
                name: req.query.name,
                phone: req.query.phone,
                email: req.query.email,
                gender: req.query.gender
            }

        },function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the response collection.");
        callback();
    });
    };

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});

    })

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})