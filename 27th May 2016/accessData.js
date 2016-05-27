var express = require('express');
var nunjucks = require('nunjucks');
//var storage = require('node-persist');
var app = express();


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.get('/process_get', function (req, res) {
    var findRestaurants = function (db, callback) {
        var cursor = db.collection('response').find();

        cursor.each(function (err, doc) {
            assert.equal(err, null);
            if (doc != null) {
                console.dir(doc);
                //res.render('show.html',doc);
            } else {
                //console.log("No Data");
                callback();
            }
        });
        };

        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            findRestaurants(db, function () {
                db.close();
            });
        });

        //res.render('show.html',response);


    })
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})

