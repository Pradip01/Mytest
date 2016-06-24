/**
 * Created by pradeep on 25/5/16.
 */
var express = require("express");
var app = express();

    app.route("/book")
    .get(function(req,res){
            res.send("get random book");
        })

    .post(function(req,res){
            res.send("Add book");
        })

    .put(function(req,res){
            res.send("update book");
        })
app.listen(8082);